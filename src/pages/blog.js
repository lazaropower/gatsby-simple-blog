import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <li>
            <Link to={edge.node.fields.slug} target="_blank">
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
