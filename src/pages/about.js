import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        The main idea behind this project is to have the simplest blog ever.
      </p>
      <p>
        Check more information <Link to="/contact">here</Link>.
      </p>
    </Layout>
  )
}

export default About
