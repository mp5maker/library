import React from "react"
import { graphql } from 'gatsby'

import { Header } from '../Components/Header'
import { Layout } from '../Components/Layout'
import { SEO } from "../Components/SEO"

export default function BlogPost({ data }) {
    const post = data.markdownRemark

    return (
        <>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <Header
                page={`Blog Post`}
                title={`My Portfolio`}/>
            <Layout>
                <div>Hello blog post</div>
            </Layout>
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
            excerpt
        }
    }
`