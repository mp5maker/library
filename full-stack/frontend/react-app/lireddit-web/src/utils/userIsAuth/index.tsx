import React from 'react'
import { useMeQuery } from '../../generated/graphql'
import { useRouter } from 'next/router'

export const userIsAuth = () => {
    const [{ data, fetching }] = useMeQuery()
    const router = useRouter()

    React.useEffect(() => {
        if (!fetching && !data?.me) router.replace("/login?next=" + router.pathname)
    }, [fetching, data, router])
}