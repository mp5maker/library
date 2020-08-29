import React from 'react'
import { Box, IconButton } from '@chakra-ui/core'
import { PostSnippetFragment, useVoteMutation, VoteMutation, useMeQuery } from '../../generated/graphql'
import gql from 'graphql-tag'
import { ApolloCache } from '@apollo/client'

interface UpdootSectionProps {
    item: PostSnippetFragment
}

const updateAfterVote = (value: number, postId, cache: ApolloCache<VoteMutation>) => {
    const data = cache.readFragment<{
        id: number
        points: number
        voteStatus: number | null
    }>({
        id: `Post:${postId}`,
        fragment: gql`
            fragment _ on Post {
                id
                points
                voteStatus
            }
        `
    })
    if (data?.voteStatus === value) return
    if (data) {
        const newPoints = (data?.points as number) + (!data?.voteStatus ? 1 : 2) * value;
        cache.writeFragment({
            id: `Post:${postId}`,
            fragment: gql`
                fragment __ on Post {
                    points
                    voteStatus
                }
            `,
            data: { points: newPoints, voteStatus: value },
        })
    }
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ item }) => {
    const { data: meData } = useMeQuery()
    const [loadingState, setLoadingState] = React.useState<'updoot-loading' | 'downdoot-loading' | 'not-loading'>('not-loading')
    const [vote] = useVoteMutation()

    const Content = (
        <Box mr={5}>
            <Box>
                <IconButton
                    variantColor={item.voteStatus == 1 ? `green` : undefined}
                    isLoading={loadingState == 'updoot-loading'}
                    onClick={async () => {
                        if (item.voteStatus === 1) return
                        setLoadingState('updoot-loading')
                        await vote({
                            variables: { postId: item.id, value: 1 },
                            update: (cache) => updateAfterVote(1, item.id, cache)
                        })
                        setLoadingState('not-loading')
                    }}
                    aria-label={`updoot post`}
                    icon="chevron-up" />
            </Box>
            <Box textAlign={`center`}>
                {item.points}
            </Box>
            <Box>
                <IconButton
                    variantColor={item.voteStatus == -1 ? `red` : undefined}
                    isLoading={loadingState == 'downdoot-loading'}
                    onClick={async () => {
                        if (item.voteStatus === -1) return
                        setLoadingState('downdoot-loading')
                        vote({
                            variables: { postId: item.id, value: -1 },
                            update: (cache) => updateAfterVote(-1, item.id, cache)
                        })
                        setLoadingState('not-loading')
                    }}
                    aria-label={`downdoot post`}
                    icon="chevron-down" />
            </Box>
        </Box>
    )

    return (
        <>
            {meData?.me?.id === item?.creator?.id ? Content : <></>}
        </>
    )
}