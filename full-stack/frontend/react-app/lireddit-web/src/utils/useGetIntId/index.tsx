import { useRouter } from "next/dist/client/router"

export const useGetIntId = () => {
    const router = useRouter()
    const intId = typeof router?.query?.id === 'string' ? parseInt(router.query.id) : -1
    return intId
}