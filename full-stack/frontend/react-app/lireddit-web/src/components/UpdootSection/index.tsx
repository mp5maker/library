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
                        isLoading={loadingState == 'updoot-loading'}
                        onClick={async() => {
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
                        isLoading={loadingState == 'downdoot-loading'}
                        onClick={async() => {
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