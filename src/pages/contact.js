import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Check it out!</h1>
      <p>More information available on <Link to="https://github.com/lazaropower/gatsby-simple-blog" target="_blank">Github</Link>.</p>
      </Layout>
  )
}

export default Contact