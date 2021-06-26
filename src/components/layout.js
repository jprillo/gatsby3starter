import React from 'react';
import Navbar from './navbar.js'
import Footer from './footer.js'

import {StaticQuery, graphql} from 'gatsby'



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
   
  <Navbar data={data}></Navbar>      
          <div style={{minHeight: "80vh"}}>
            {children}
            
          </div>
          <Footer/>
        </React.Fragment>
      )}
    />
  )


export default Layout