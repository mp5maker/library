import * as React from 'react';

import ThemeContextProvider, { ThemeContext } from "../contexts/ThemeContext";

import { useGet } from '../http/Get'

import SideNote, { SideNoteAlternative } from '../layouts/sidenotes/sidenotes';

interface homeProps {}

export const Home: React.SFC<homeProps> = () => {
    const { loading, error, data } = useGet("https://jsonplaceholder.typicode.com/posts", [])

    return (
        <ThemeContextProvider>
            <div>
                <h4>
                    Home
                </h4>
            </div>
            <div className="common-header my-3">
                <div>
                    On the left
                </div>
                <div>
                    On the right
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <h5>Recent Comments</h5>
                    {
                        loading ?
                            <span>
                                Loading...
                            </span>
                        : <React.Fragment></React.Fragment>
                    }
                    {
                        error ?
                            <span>
                                Something seems to be wrong!
                            </span>
                        : <React.Fragment></React.Fragment>
                    }
                    {
                        data ?
                        <div>
                            {
                                data.map((comment) => {
                                    return (
                                        <div
                                            key={comment.id}
                                            className="card d-inline-block mr-3 my-3 w-25 box-shadow-hover">
                                            <div className="card-body">
                                                <div className="card-title">
                                                    <strong>
                                                        { comment.title }
                                                    </strong>
                                                </div>
                                                <div className="card-text">
                                                    { comment.body }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : <span>
                            There is no data to show!
                        </span>
                    }
                    <div>
                        <ThemeContext.Consumer>{
                            ({isLightTheme, light, dark}) => (
                                <React.Fragment>
                                    <div>
                                        Is Light Theme: { isLightTheme }
                                    </div>
                                    <div>
                                        Light: { light.syntax }
                                    </div>
                                    <div>
                                        Dark: { dark.syntax }
                                    </div>
                                </React.Fragment>
                            )
                        }
                        </ThemeContext.Consumer>
                    </div>
                </div>
                <div className="col-md-3">
                    <SideNote/>
                    <SideNoteAlternative />
                </div>
            </div>
        </ThemeContextProvider>
    )
}