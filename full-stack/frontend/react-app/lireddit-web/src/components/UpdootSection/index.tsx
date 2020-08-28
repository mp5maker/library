import React from 'react'
import { Box, IconButton } from '@chakra-ui/core'
import { PostSnippetFragment, useVoteMutation } from '../../generated/graphql'

interface UpdootSectionProps {
    item: PostSnippetFragment
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ item }) => {
    const [loadingState, setLoadingState] = React.useState<'updoot-loading' | 'downdoot-loading' | 'not-loading'>('not-loading')
    const [_, vote] = useVoteMutation()

    return (
        <>
            <Box mr={5}>
                <Box>
                    <IconButton
                        variantColor={item.voteStatus == 1 ? `green` : undefined}
                        isLoading={loadingState == 'updoot-loading'}
                        onClick={async() => {
                            if (item.voteStatus === 1) return
                            setLoadingState('updoot-loading')
                            await vote({ postId: item.id, value: 1 })
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
                        onClick={async() => {
                            if (item.voteStatus === -1) return
                            setLoadingState('downdoot-loading')
                            vote({ postId: item.id, value: -1 })
                            setLoadingState('not-loading')
                        }}
                        aria-label={`downdoot post`}
                        icon="chevron-down" />
                </Box>
            </Box>
        </>
    )
}