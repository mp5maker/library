import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '../lib/apollo'

function MyApp({ Component, pageProps }: any) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
