import { Resolver, Query, Int, Arg, Mutation, InputType, Field, Ctx, UseMiddleware, FieldResolver, Root, ObjectType } from 'type-graphql'
import { Post } from '../entities/Post'
import { MyContext } from '../types'
import { isAuth } from '../middleware/isAuth'
import { getConnection } from 'typeorm'
import { Updoot } from '../entities/Updoot'
import { User } from '../entities/User'

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

    @FieldResolver(() => User)
    creator(@Root() post: Post) {
        return User.findOne(post.creatorId)
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
                ${ userId ? `,(select value from updoot where "userId" = $2 and "postId" = p.id) "voteStatus"` : `null as "voteStatus"`}
                from post p
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
        return Post.findOne(id)
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
        @Arg("id", () => Int) id: number,
        @Arg("title") title: string,
        @Arg("text") text: string,
        @Ctx() { req }: MyContext,
    ): Promise<Post | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Post)
            .set({ title, text })
            .where('id = :id and "creatorId" = :creatorId', { id, creatorId: req.session.userId })
            .returning("*")
            .execute()
        return result.raw[0]
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deletePost(
        @Arg("id", () => Int) id: number,
        @Ctx() { req }: MyContext
    ): Promise<boolean> {
        await Post.delete({ id, creatorId: req.session.userId })
        return true;
    }
}