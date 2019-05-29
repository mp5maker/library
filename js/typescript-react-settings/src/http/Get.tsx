import * as React from 'react'

export const useGet = (url: string, dependencies: string[]) => {
    const [state, setState] = React.useState({
        loading: true,
        error: false,
        data: []
    })
    // 'https://jsonplaceholder.typicode.com/posts'
    React.useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(jsonResponse => setState({...state, data: jsonResponse, error: false, loading: false}))
            .catch(() => setState({...state, error: true, loading: false}))
    }, dependencies)

    return {...state}
}
