import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import { getAccessToken, setAccessToken } from './accessToken';
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode from 'jwt-decode'


const cache = new InMemoryCache({});

const requestLink = new ApolloLink((operation, forward) =>
    new Observable(observer => {
        let handle: any;
        Promise.resolve(operation)
            .then((operation) => {
                const accessToken = getAccessToken()
                operation.setContext({
                    ...(accessToken ? {
                        headers: {
                            authorization: accessToken ? `bearer ${accessToken}` : ''
                        }
                    } : {})
                })
            })
            .then(() => {
                handle = forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                });
            })
            .catch(observer.error.bind(observer));

        return () => {
            if (handle) handle.unsubscribe();
        };
    })
);

export const client: any = new ApolloClient({
    link: ApolloLink.from([
        new TokenRefreshLink({
            accessTokenField: 'accessToken',
            isTokenValidOrUndefined: () => {
                const token = getAccessToken()
                if (!token) return true

                try {
                    const { exp } = jwtDecode(token)
                    if (Date.now() >= exp * 1000) return false
                    else return true
                } catch (error) {
                    return false
                }
            },
            fetchAccessToken: () => fetch('http://localhost:4000/refresh-token', { credentials: "include", method: "POST" }),
            handleFetch: accessToken => setAccessToken(accessToken),
            handleError: err => console.log(err)
        }) as any,
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) console.log(graphQLErrors);
            if (networkError) console.log(networkError)
        }),
        requestLink,
        new HttpLink({
            uri: "http://localhost:4000/graphql",
            credentials: 'include',
        })
    ]),
    cache
});
