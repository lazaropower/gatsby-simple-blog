import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <h1>Contact me!</h1>
      <p>You can reach me out on <Link to="https://www.twitter.com/lazaro_8" target="_blank">twitter</Link>!</p>
      </Layout>
  )
}

export default Contact