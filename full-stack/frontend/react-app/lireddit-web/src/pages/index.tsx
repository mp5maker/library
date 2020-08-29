import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/core'
import NextLink from 'next/link'
import React from 'react'
import { EditDeletePostButtons } from '../components/EditDeletePostButtons'
import { Layout } from "../components/Layout"
import { UpdootSection } from '../components/UpdootSection'
import { usePostsQuery } from "../generated/graphql"
import { v4 } from 'uuid'
import { withApollo } from '../utils/withApollo'

const Index = () => {
  const { data, error, loading, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 15,
      cursor: null
    },
    notifyOnNetworkStatusChange: true
  });

  if (!loading && !data) {
    return (
      <Box>
        { error.message }
      </Box>
    )
  }

  if (!loading && !data?.posts) {
    return (
      <Box>
        No Data Found
      </Box>
    )
  }

  return (
    <>
      <Layout>
        {
          !data && data?.posts && loading ? (
            <Box>
              Loading...
            </Box>
          ) : (
            <Stack spacing={8}>
              {
                data?.posts?.posts?.map((item) => {
                  if (!item) return null
                  return (
                    <Flex key={`${item.id}-${v4()}`} p={5} shadow="md" borderWidth="1px">
                      <Box mr={5}>
                        <UpdootSection item={item} />
                      </Box>
                      <Box flex="1">
                        <NextLink
                          href="/post/[id]"
                          as={`/post/${item.id}`}>
                          <Link>
                            <Heading fontSize="xl">
                              { item.title }
                            </Heading>
                          </Link>
                        </NextLink>
                        <Text>
                          Posted By: {item.creator.username}
                        </Text>
                        <Flex justifyContent={`space-between`}>
                          <Text
                            mt={4}>
                            { item.textSnippet }
                          </Text>
                          <EditDeletePostButtons item={item} />
                        </Flex>
                      </Box>
                    </Flex>
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
                  fetchMore({
                    variables: {
                      limit: variables?.limit,
                      cursor: data.posts.posts[data.posts.posts.length - 1].createdAt
                    },
                  })
                }}
                isLoading={loading}
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

export default withApollo({ ssr: true })(Index)
