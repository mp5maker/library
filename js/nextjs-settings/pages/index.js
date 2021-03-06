import  React, { Component, Fragment } from 'react'

import Link from "next/link"

import Layout from "../components/Layout"

import indexStyle from "../styles/jsx/index"

/* Route Masking */
const PostLink = (props) => (
    <li>
        <Link
            as={`/post/${props.id}`}
            href={`/post?id=${props.id}`}>
            <a>{ props.title }</a>
        </Link>
    </li>
)

/* Only the pages is the special directory for the next js */
class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Fragment>
                <Layout>
                    <div>
                        <h4>
                            Home
                        </h4>
                    </div>
                    <div>
                        <h6>
                            Blog
                        </h6>
                        <ul>
                            <PostLink id="hello-nextjs" title="Hello Next.js"/>
                            <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
                            <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
                        </ul>
                    </div>
                </Layout>
                <style jsx>
                    { indexStyle }
                </style>
            </Fragment>
        )
    }
}

export default Index