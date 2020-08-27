import { Resolver, Query, Int, Arg, Mutation, InputType, Field, Ctx, UseMiddleware, FieldResolver, Root, ObjectType } from 'type-graphql'
import { Post } from '../entities/Post'
import { MyContext } from '../types'
import { isAuth } from '../middleware/isAuth'
import { getConnection } from 'typeorm'

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

    @Query(() => PaginatedPosts)
    async posts(
        @Arg('limit', () => Int) limit: number,
        @Arg('cursor', () => String, { nullable: true }) cursor: string | null
    ): Promise<PaginatedPosts> {
        const realLimit = Math.min(50, limit)
        const realLimitPlusOne = realLimit + 1

        const queryBuilder = getConnection()
            .getRepository(Post)
            .createQueryBuilder("p")
            .orderBy('"createdAt"', "DESC")
            .take(realLimitPlusOne)

        if (cursor) {
            queryBuilder
                .where('"createdAt" < :cursor', {
                cursor: new Date(parseInt(cursor))
            })
        }

        const posts = await queryBuilder.getMany()

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
    async deletePost(@Arg("id") id: number): Promise<boolean> {
        await Post.delete(id)
        return true;
    }
}