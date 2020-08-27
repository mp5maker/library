import { cacheExchange, Resolver } from "@urql/exchange-graphcache";
import { dedupExchange, Exchange, fetchExchange, stringifyVariables } from "urql";
import { pipe, tap } from 'wonka';
import { LoginMutation, LogoutMutation, MeDocument, MeQuery, RegisterMutation } from '../../generated/graphql';
import { betterUpdateQuery } from "../betterUpdateQuery";
import Router from 'next/router'


/* No Idea how it workds */
export const errorExchange: Exchange = ({ forward }) => ops$ => {
    return pipe(
        forward(ops$),
        tap(({ error }) => {
            if (error?.message.includes('NOT_AUTHENTICATED')) Router.replace("/login")
        })
    )
}

export const cursorPagination = (): Resolver => {
    return (_parent, fieldArgs, cache, info) => {
        const { parentKey: entityKey, fieldName } = info;

        const allFields = cache.inspectFields(entityKey);
        const fieldInfos = allFields.filter(info => info.fieldName === fieldName);
        const size = fieldInfos.length;
        if (size === 0) return undefined;

        const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`
        const isItInTheCache = cache.resolveFieldByKey(entityKey, fieldKey)
        info.partial = !isItInTheCache

        let results: Array<string> = []
        fieldInfos.forEach(fi => {
            const data = cache.resolveFieldByKey(entityKey, fi.fieldKey) as string[]
            results.push(...data)
        })
        return results
    };
};

export const createUrqlClient = (ssrExchange: any) => ({
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
        credentials: "include" as const,
    },
    exchanges: [
        dedupExchange,
        cacheExchange({
            resolvers: {
                Query: {
                    posts: cursorPagination()
                }
            },
            updates: {
                Mutation: {
                    logout: (_result, args, cache, info) => {
                        betterUpdateQuery<LogoutMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            () => ({ me: null })
                        )
                    },
                    login: (_result, args, cache, info) => {
                        betterUpdateQuery<LoginMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result, (result, query) => {
                                if (result.login.errors) return query
                                else return {
                                    me: result.login.user
                                }
                            }
                        )
                    },
                    register: (_result, args, cache, info) => {
                        betterUpdateQuery<RegisterMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result, (result, query) => {
                                if (result.register.errors) return query
                                else return {
                                    me: result.register.user
                                }
                            }
                        )
                    }
                }
            },
        }),
        errorExchange,
        ssrExchange,
        fetchExchange
    ]
})