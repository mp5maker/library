import React, { Fragment } from "react"

import { withRouter } from "next/router";

import Layout from "../components/Layout"


const Post = withRouter((props) => (
    <Fragment>
        <Layout>
            <h4>
                { props.router.query.id }
            </h4>
            <p>
                This is the blog content
            </p>
        </Layout>
    </Fragment>
))

export default Post