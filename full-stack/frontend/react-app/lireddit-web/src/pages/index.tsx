import { Box, Button, Flex, Heading, Link, Stack, Text, IconButton } from '@chakra-ui/core'
import { withUrqlClient } from 'next-urql'
import NextLink from 'next/link'
import React from 'react'
import { Layout } from "../components/Layout"
import { UpdootSection } from '../components/UpdootSection'
import { usePostsQuery, useDeletePostMutation } from "../generated/graphql"
import { createUrqlClient } from "../utils/createUrqlClient"

const Index = () => {
  const [variables, setVariables] = React.useState({ limit: 10, cursor: null as null | string })
  const [{ data, fetching }] = usePostsQuery({ variables });
  const [, deletePost] = useDeletePostMutation()

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
        {
          !data && data?.posts && fetching ? (
            <div>
              Loading...
            </div>
          ) : (
            <Stack spacing={8}>
              {
                data?.posts?.posts?.map((item) => {
                  if (!item) return null
                  return (
                    <Flex key={item.id} p={5} shadow="md" borderWidth="1px">
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
                          <Box>
                            <NextLink
                              href="/post/edit/[id]"
                              as={`/post/edit/${item.id}`}>
                              <IconButton
                                as={Link}
                                mr={5}
                                icon={`edit`}
                                aria-label="edit post" />
                            </NextLink>
                            <IconButton
                              onClick={() => deletePost({ id: item.id })}
                              icon={`delete`}
                              aria-label="delete post" />
                          </Box>
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
