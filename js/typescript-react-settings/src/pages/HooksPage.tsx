import * as React from 'react'

import { usePosts } from '../hooks/posts'

import { ThemeContext } from "../contexts/ThemeContext";

import { CheckReducer } from "../components/CheckReducer"

const url = "https://heroku-fake-rest-api.herokuapp.com/posts/";

interface HomeProps {};

const HooksPage: React.SFC<HomeProps> = () => {
    /* useContext */
    const themeContextValues = React.useContext(ThemeContext)
    console.log('Theme Context Values')
    console.log(themeContextValues)
    console.log(':::::::::::::::::::::::::::::::::::::::::::::')

    /* Custom Hook */
    const { loading, error, data } = usePosts(url, [])
    console.log('Use Posts')
    console.log(loading)
    console.log(error)
    console.log(data)
    console.log(':::::::::::::::::::::::::::::::::::::::::::::')

    /* useState */
    const [ count, setCount ] = React.useState(0);
    const addCounter = () => setCount(count + 1);

    /* useEffect */
    React.useEffect(() => {
        document.title = `Clicked ${count} time`;
    }, [count])

    /* useCallback */
    const addition = (x: number, y: number) => x + y
    let x = count; let y = count + 1;
    const memoizedAddition = React.useCallback(() => {
        console.log('useCallback')
        console.log('Memoized Addtion will return old value of count')
        console.log('Returns same function instance')
        console.log(addition(x, y));
    }, [count])
    console.log(':::::::::::::::::::::::::::::::::::::::::::::')

    /* useMemo */
    const memoAddition = React.useCallback(() => {
        console.log('Use Memo')
        console.log('Same Value returns')
        console.log(Math.sin(count))
    }, [count])
    console.log(':::::::::::::::::::::::::::::::::::::::::::::')

    /* useRef */
    const inputEl = React.useRef(null);
    const submit = (event: any) => {
        event.preventDefault();
        console.log(inputEl)
    }

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
            <div>
                <button
                    onClick={memoizedAddition}
                    className="btn btn-warning my-3">
                    Use Callback
                </button>
            </div>
            <div>
                <button
                    onClick={memoAddition}
                    className="btn btn-danger my-3">
                    Use Memo
                </button>
            </div>
            <div>
                <form onSubmit={submit}>
                    <input
                        placeholder={`Press Enter`}
                        ref={inputEl}
                        name="photon" />
                </form>
            </div>
        </React.Fragment>
    )
}
export default HooksPage
export { HooksPage }