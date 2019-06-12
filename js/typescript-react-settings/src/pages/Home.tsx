import * as React from 'react';

import ThemeContextProvider from "../contexts/ThemeContext";

import { useGet } from '../http/Get'

interface homeProps {}

export const Home: React.SFC<homeProps> = () => {
    const { loading, error, data } = useGet("https://jsonplaceholder.typicode.com/posts", [])

    return (
        <ThemeContextProvider>
            <React.Fragment>
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
                <div>
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
                </div>
            </React.Fragment>
        </ThemeContextProvider>
    )
}