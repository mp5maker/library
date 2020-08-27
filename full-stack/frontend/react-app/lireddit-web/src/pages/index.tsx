import React from 'react'
import { withUrqlClient } from 'next-urql'
import { createUrqlClient } from "../utils/createUrqlClient"
import { usePostsQuery } from "../generated/graphql"
import { Layout } from "../components/Layout"
import NextLink from 'next/link'
import { Link, Stack, Box, Heading, Text, Flex, Button } from '@chakra-ui/core'

const Index = () => {
  const [variables, setVariables] = React.useState({ limit: 10, cursor: null as null | string })
  const [{ data, fetching }] = usePostsQuery({ variables });

  if (!fetching && !data?.posts) {
    return (
      <div>
        No Data Found
      </div>
    )
  }

  return (
    <>
      <Layout>
        <Flex align="center" mb="5">
          <Heading>LiReddit</Heading>
          <NextLink href="/create-post">
            <Link ml="auto">
              Create Post
            </Link>
          </NextLink>
        </Flex>
        {
          !data && data?.posts && fetching ? (
            <div>
              Loading...
            </div>
          ) : (
            <Stack spacing={8}>
              {
                data?.posts?.posts?.map((item) => {
                  return (
                    <Box key={item.id} p={5} shadow="md" borderWidth="1px">
                      <Heading fontSize="xl">
                        { item.title }
                      </Heading>
                      <Text
                        mt={4}>
                        { item.textSnippet }
                      </Text>
                    </Box>
                  )
                })
              }
            </Stack>
          )
        }
        {
          data && data?.posts?.hasMore? (
            <Flex>
              <Button
                onClick={() => {
                  setVariables({
                    limit: variables.limit,
                    cursor: data?.posts?.posts[data?.posts?.posts.length - 1].createdAt
                  })
                }}
                isLoading={fetching}
                m="auto"
                my="8">
                Load More
              </Button>
            </Flex>
          ) : (
            <></>
          )
        }
      </Layout>
    </>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Index)
