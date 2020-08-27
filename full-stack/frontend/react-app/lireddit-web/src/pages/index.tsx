import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from "../utils/createUrqlClient"
import { usePostsQuery } from "../generated/graphql"
import { Layout } from "../components/Layout"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/core'

const Index = () => {
  const [{ data }] = usePostsQuery({
    variables: {
      limit: 10
    }
  });

  return (
    <>
      <Layout>
        <NextLink href="/create-post">
          <Link>
            Create Post
          </Link>
        </NextLink>
        {
          !data ? (
            <div>
              Loading...
            </div>
          ) : data.posts.map((item) => {
            return (
              <div key={item.id}>
                { item.title }
              </div>
            )
          })
        }
      </Layout>
    </>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Index)
