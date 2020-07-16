import React from 'react'
import axios from 'axios'
import get from 'lodash/get'

import { Colors } from '../constants/Colors'
import { Card } from '../components/Card'
import "./index.css"

const url = 'https://heroku-fake-rest-api.herokuapp.com/posts?_page=7&_limit=20'
export const Index = ({ posts }) => {
    const theme = 'light'
    console.log(posts)

    return (
        <div className={`App`}>
            <header className={`App-header`}>
                <img
                    alt="logo"
                    className={`static-logo`}
                    src="/ok.png"/>
            </header>
            <div className={`Flex`}>
                {
                    Array.isArray(posts) && posts.length > 0 && posts.map((post, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Card colors={Colors} theme={theme} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

Index.getInitialProps = async({ req }) => {
    const response = await axios.get(url)
    const posts = get(response, 'data', [])
    return { posts }
}

export default Index