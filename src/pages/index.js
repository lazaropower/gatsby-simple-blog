import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import "../styles/style.scss"

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>
        This is a very <b>simple blog</b>.
      </h2>
      <p>
        📕 It uses Gatsby and is ready to be integrated with{" "}
        <Link to="https://www.contentful.com" target="_blank">
          contentful
        </Link>
        .
      </p>
      <p>
        🚀 Very <b>easy</b> to configure and deploy.
      </p>
      <p>
        🔗 Need more information? Check <Link to="/contact">this out</Link>.
      </p>
    </Layout>
  )
}
