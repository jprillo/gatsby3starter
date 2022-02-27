import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2.js'
import background from '../images/hero-background.png'
import "../style/main.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <div className="pad2" style={{backgroundImage: "url(" + background + ")"}}>
        <div className="page-container" >
        <h1 >{post.frontmatter.title}</h1>
   
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
       </div></div>
        </Layout>
      </div>
  
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
   
      }
    }
  }
`