import * as React from 'react'

export const usePosts = (url: string, dependencies: Array<any>) => {
    const [ state, setState ] = React.useState({
        loading: true,
        error: false,
        data: []
    })

    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(responseJSON => setState({
                ...state,
                data: responseJSON,
                loading: false,
                error: false
            }))
            .catch(() => setState({
                ...state,
                loading: false,
                error: true
            }))
    }, dependencies)

    return { ...state }
}