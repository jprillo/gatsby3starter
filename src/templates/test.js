import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    
      <div>
        <h1 style={{color: "red"}}>{post.frontmatter.title}</h1>
        <GatsbyImage image={getImage(post.frontmatter.featuredImage)} width= "100px" alt="test data"/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
  
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(blurredOptions: {width: 200})
          }
        }
        
      }
    }
  }
`