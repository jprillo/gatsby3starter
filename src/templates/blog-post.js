import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout.js'



export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <Layout>
        <Helmet title={post.frontmatter.title} defer={false} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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