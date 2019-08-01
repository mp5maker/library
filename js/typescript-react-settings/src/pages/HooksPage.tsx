import * as React from 'react'

import { usePosts } from '../hooks/posts'


const url = "https://heroku-fake-rest-api.herokuapp.com/posts/";

interface HomeProps {};

const HooksPage: React.SFC<HomeProps> = () => {
    const { loading, error, data } = usePosts(url, [])

    /* Asynchronous */
    console.log('Use Posts')
    console.log(loading)
    console.log(error)
    console.log(data)

    const [ count, setCount ] = React.useState(0);

    const addCounter = () => setCount(count + 1);

    React.useEffect(() => {
        document.title = `Clicked ${count} time`;
    }, [count])

    return (
        <React.Fragment>
            <button onClick={addCounter}>
                Add Counter
            </button>
            <span>
                Current Counter: { count }
            </span>
        </React.Fragment>
    )
}
export default HooksPage
export { HooksPage }