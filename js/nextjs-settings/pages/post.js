import React, { Fragment } from "react"

import { withRouter } from "next/router";

import Layout from "../components/Layout";

const Post = withRouter((props) => (
    <Fragment>
        <Layout>
            <h4>
                { props.router.query.id }
            </h4>
            <div className="markdown">
                <p>
                    This is our blog post.
                </p>
            </div>
            <style jsx global>{`
                p {
                    color: firebrick;
                }
            `}</style>
        </Layout>
    </Fragment>
))

export default Post