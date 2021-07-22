import { Link } from 'gatsby'
import React from 'react'
import Layout from "../components/layout"

const About = () => {
    return (
        <Layout>
            <h1>About me</h1>
            <p>Here it should be written a drescription about myself.</p>
            <p>If you need something, reach me out <Link to='/contact'>here</Link>.</p>
        </Layout>
    )
}

export default About