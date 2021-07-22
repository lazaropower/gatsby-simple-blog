import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

import '../styles/style.scss'

export default function Home() {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I am creating this website to learn gatsby.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}
