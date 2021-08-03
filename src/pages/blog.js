import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import * as blogStyles from "./blog.module.scss"

const Blog = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.post}>
            <Link to={edge.node.slug} target="_blank">
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Blog
