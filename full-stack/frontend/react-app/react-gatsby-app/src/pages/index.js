import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'

import { Header } from '../Components/Header'
import { Layout } from '../Components/Layout'
import { UserList } from '../Components/UserList'

export default function Home() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                date
                title
              }
              fields {
                slug
              }
              excerpt
              timeToRead
              html
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Header
        page={`Home`}
        title={data.site.siteMetadata.title}/>
      <Layout>
        <div style={{ color: `purple`}}>
            <p>
              What a World.
            </p>
            <img
              style={{
                borderRadius: `5px`
              }}
              crossOrigin={`anonymous`}
              src="https://source.unsplash.com/random/400x200"
              alt="" />
        </div>
        <UserList />
        <div>
          <h4>
            {data.allMarkdownRemark.totalCount} Posts
          </h4>
          {
            data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <div key={node.id}>
                  <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                      — {node.frontmatter.date}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                  <Link to={node.fields.slug}>
                      Details
                  </Link>
                </div>
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}
