import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout.js'




const IndexPage = ({data}) => {
  return (
    <main >
      <Helmet title="Gatsby V3 Starter" defer={false} />
      <Layout>
      <title>Home Page</title>
      <h1>
        Gatsby. LET'S GOOOOOOOO!!!!!!!!       
      </h1>
     
     
     
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (

          <div key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
         
           
           
          </div>
        ))}
</Layout>
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
