import * as React from 'react'

import { usePosts } from '../hooks/posts'

import { ThemeContext } from "../contexts/ThemeContext";

import { CheckReducer } from "../components/CheckReducer"

const url = "https://heroku-fake-rest-api.herokuapp.com/posts/";

interface HomeProps {};

const HooksPage: React.SFC<HomeProps> = () => {
    /* Theme Context Values */
    const themeContextValues = React.useContext(ThemeContext)
    console.log('Theme Context Values')
    console.log(themeContextValues)

    console.log(':::::::::::::::::::::::::::::::::::::::::::::')
    /* Asynchronous */
    const { loading, error, data } = usePosts(url, [])
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
            <button onClick={addCounter} className="btn btn-primary my-3">
                Add Counter
            </button>
            <div>
                Current Counter: { count }
            </div>
            <div>
                <CheckReducer />
            </div>
        </React.Fragment>
    )
}
export default HooksPage
export { HooksPage }