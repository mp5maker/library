import React from 'react'
import { useMeQuery } from '../../generated/graphql'
import { useRouter } from 'next/router'

export const userIsAuth = () => {
    const { data, loading } = useMeQuery()
    const router = useRouter()

    React.useEffect(() => {
        if (!loading && !data?.me) router.replace("/login?next=" + router.pathname)
    }, [loading, data, router])
}