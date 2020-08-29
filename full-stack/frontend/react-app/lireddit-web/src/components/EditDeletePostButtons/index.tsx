import React from 'react'
import { Box, IconButton, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import { useDeletePostMutation, useMeQuery } from '../../generated/graphql'

interface EditDeletePostButtonsProps {
    item: any
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({ item }) => {
    const [deletePost] = useDeletePostMutation()
    const { data: meData } = useMeQuery()

    const Content =  (
        <Box>
            <NextLink
                href="/post/edit/[id]"
                as={`/post/edit/${item?.id}`}>
                <IconButton
                    as={Link}
                    mr={5}
                    icon={`edit`}
                    aria-label="edit post" />
            </NextLink>
            <IconButton
                onClick={() => deletePost({
                    variables: { id: item?.id },
                    update: (cache) => cache.evict({ id: `Post:${item?.id}`})
                })}
                icon={`delete`}
                aria-label="delete post" />
        </Box>
    )

    return (
        <>
            { meData?.me?.id === item?.creator?.id ? Content : <></> }
        </>
    )
}