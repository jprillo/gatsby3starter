import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'
import { Link} from 'gatsby'
import background from '../images/hero-background.png'
import wine from '../images/wine.png'





export default function Home({ data }) {
  const home = data.markdownRemark
  return (
  
  <div>
       <Helmet>
        <title>Vyntrade  Vineyard to Trade</title>
        <meta name="description" content={home.frontmatter.mission} />
        <meta name="theme-color" content="black" />
      </Helmet>
  <Layout>
    <div className="hero" style={{textAlign: "center", backgroundImage: "url(" + background + ")"}}>
   <h1 className="hero-head">{home.frontmatter.title}</h1>
   <div className="align-center mission" style ={{background: "white"}}>
      <h2>Our Mission</h2>
      <p>{home.frontmatter.mission}</p>
    </div>
    </div>

  

    <div className="about align-center" >
      <div className="about-image" style={{overflow: "hidden"}}>
        <img  height="100%" src={wine} alt="about us"/>
      </div>
      <div className="about-description">
        <h3>About Us</h3>
        <p style={{marginBottom: "2em"}}>{home.frontmatter.about}</p>
       <Link  className= "primary-button" to ="/about">Learn More</Link>
      </div>
      </div>
     

   

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
        mission
        about
   
      }
    }
  }
`