import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Header } from '../Components/Header'
import { Layout } from '../Components/Layout'

export default function About() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <>
            <Header
                page={`About Me`}
                title={data.site.siteMetadata.title} />
            <Layout>
                <div style={{ color: `purple` }}>
                    <p>Such wow. Very React.</p>
                </div>
            </Layout>
        </>
    )
}