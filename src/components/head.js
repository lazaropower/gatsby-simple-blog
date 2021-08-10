import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet }  from 'react-helmet';

const Head = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet title={data.site.siteMetadata.title} />
    )
}

export default Head;