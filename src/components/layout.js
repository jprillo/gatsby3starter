import React from 'react';
import Nav from './nav'
import {StaticQuery, graphql, Link} from 'gatsby'



const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
            allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "main-pages"}}}) {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                    }
                  }
                }
              }
        }
      `}
      render={data => (
        <React.Fragment>
   {data.allMarkdownRemark.edges.map(({ node }) => (

<div key={node.id}>
  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>

 
 
</div>
))}
          <Nav></Nav>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </React.Fragment>
      )}
    />
  )


export default Layout