import { Resolver, Query, Int, Arg, Mutation, InputType, Field, Ctx, UseMiddleware } from 'type-graphql'
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


@Resolver()
export class PostResolver {
    @Query(() => [Post])
    async posts(
        @Arg('limit', () => Int) limit: number,
        @Arg('cursor', () => String, { nullable: true }) cursor: string | null
    ): Promise<Post[]> {
        const realLimit = Math.min(50, limit)
        const queryBuilder = getConnection()
            .getRepository(Post)
            .createQueryBuilder("p")
            .orderBy('"createdAt"', "DESC")
            .take(realLimit)

        if (cursor) {
            queryBuilder
                .where('"createdAt" < :cursor', {
                cursor: new Date(parseInt(cursor))
            })
        }

        return queryBuilder.getMany()
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