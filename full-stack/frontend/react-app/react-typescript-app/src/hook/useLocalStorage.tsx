import * as React from 'react'

type all = string | null | undefined | number | Array<any>

export const useLocalStorage = <A extends all>(key: string, initial: A) => {
    const [value, setValue] = React.useState<A>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const saved = window.localStorage.getItem(key)
            if (saved) return JSON.parse(saved)
        }
        return initial
    })

    React.useEffect(() => {
        if (window && window.localStorage) {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
    }, [value])

    return [value, setValue] as [typeof value, typeof setValue]
}