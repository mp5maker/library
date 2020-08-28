import { Resolver, Query, Int, Arg, Mutation, InputType, Field, Ctx, UseMiddleware, FieldResolver, Root, ObjectType } from 'type-graphql'
import { Post } from '../entities/Post'
import { MyContext } from '../types'
import { isAuth } from '../middleware/isAuth'
import { getConnection } from 'typeorm'
import { Updoot } from '../entities/Updoot'

@InputType()
class PostInput {
    @Field()
    title: string

    @Field()
    text: string
}

@ObjectType()
class PaginatedPosts {
    @Field(() => [Post])
    posts: Post[]

    @Field()
    hasMore: boolean
}

@Resolver(Post)
export class PostResolver {
    @FieldResolver(() => String)
    textSnippet(@Root() root: Post) {
        return root.text.slice(0, 50)
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async vote(
        @Arg('postId', () => Int) postId: number,
        @Arg('value', () => Int) value: number,
        @Ctx() { req }: MyContext
    ) {
        const isUpdoot = value !== -1
        const realValue = isUpdoot ? 1 : -1
        const { userId } = req.session

        const updoot = await Updoot.findOne({ where: { postId, userId }})
        if (updoot && updoot.value !== realValue) {
            await getConnection().transaction(async tm => {
                await tm.query(`
                    update updoot set value = $1
                    where "postId" = $2 and "userId" = $3
                `, [realValue, postId, userId])

                await tm.query(`
                    update post
                    set points = points + $1
                    where id = $2;
                `, [2 * realValue, postId])
            })
        } else if (!updoot) {
            await getConnection().transaction(async tm => {
                await tm.query(`
                    insert into updoot("userId", "postId", value)
                    values ($1, $2, $3);
                `, [userId, postId, realValue])
                await tm.query(`
                    update post
                    set points = points + $1
                    where id = $2;
                `, [realValue, postId])
            })
        }

        return true
    }

    @Query(() => PaginatedPosts)
    async posts(
        @Arg('limit', () => Int) limit: number,
        @Arg('cursor', () => String, { nullable: true }) cursor: string | null,
        @Ctx() { req }: MyContext
    ): Promise<PaginatedPosts> {
        const realLimit = Math.min(50, limit)
        const realLimitPlusOne = realLimit + 1
        const userId = req.session.userId

        const replacements: any[] = [
            realLimitPlusOne,
            ...(userId ? [userId] : []),
            ...(cursor ? [new Date(parseInt(cursor))]: [])
        ]

        const posts = await getConnection()
            .query(`
                select p.*,
                json_build_object(
                    'id', u.id,
                    'username', u.username,
                    'email', u.email,
                    'createdAt', u."createdAt",
                    'updatedAt', u."updatedAt"
                ) creator
                ${ userId ? `,(select value from updoot where "userId" = $2 and "postId" = p.id) "voteStatus"` : `,null as "voteStatus"`}
                from post p
                inner join public.user u on u.id = p."creatorId"
                ${cursor && !userId ? `where p."createdAt" < $2` : ""}
                ${cursor && userId ? `where p."createdAt" < $3` : ""}
                order by p."createdAt" DESC
                limit $1
            `, replacements)

        return {
            posts: posts.slice(0, realLimit),
            hasMore: posts.length === realLimitPlusOne
        }
    }

    @Query(() => Post, { nullable: true })
    post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
        return Post.findOne(id, { relations: ["creator"] })
    }

    @Mutation(() => Post)
    @UseMiddleware(isAuth)
    async createPost(
        @Arg("input") input: PostInput,
        @Ctx() { req }: MyContext
    ): Promise<Post | undefined> {
        const creatorId = req.session.userId
        return Post.create({
            ...input,
            creatorId
        }).save()
    }

    @Mutation(() => Post, { nullable: true })
    @UseMiddleware(isAuth)
    async updatePost(
        @Arg("id") id: number,
        @Arg("title", () => String, { nullable: true }) title: string,
    ): Promise<Post | null> {
        const post = await Post.findOne({ where : { id } })
        if (!post) return null
        if (typeof title !== 'undefined') {
            post.title = title
            Post.update({ id }, { title })
        }
        return post
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deletePost(
        @Arg("id", () => Int) id: number,
        @Ctx() { req }: MyContext
    ): Promise<boolean> {
        const post = await Post.findOne(id)
        if (!post) return false
        if (post?.creatorId !== req.session.userId) throw new Error('NOT_AUTHORIZED')
        await Updoot.delete({ postId: id })
        await Post.delete({ id, creatorId: req.session.userId })
        return true;
    }
}