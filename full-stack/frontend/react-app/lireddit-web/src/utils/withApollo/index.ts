import { InMemoryCache, ApolloClient } from '@apollo/client'
import { PaginatedPosts } from '../../generated/graphql';
import { createWithApollo } from '../createWithApollo'
import { NextPageContext } from 'next';

const createClient = (ctx: NextPageContext) => new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: "include" as const,
    headers: {
        ...(typeof window === 'undefined' ? { cookie: ctx?.req?.headers.cookie }: {})
    },
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    posts: {
                        keyArgs: [],
                        merge(existing: PaginatedPosts | undefined, incoming: PaginatedPosts): PaginatedPosts {
                            return {
                                ...incoming,
                                posts: [
                                    ...(existing?.posts ? existing?.posts : []),
                                    ...incoming?.posts,
                                ]
                            };
                        },
                    },
                },
            },
        },
    }),
})

export const withApollo = createWithApollo(createClient)