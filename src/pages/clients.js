import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'

import press from '../images/Slide3.jpg'





export default function Home() {
  
  return <div>
       <Helmet>
        <title>Vyntrade  Vineyard to Trade</title>
        <meta name="description" content="Create and Implement Profitable Business Opportunities in the US Wine Market for ​Wine Producers through Direct Sales Strategies to Key Retail Clients." />
        <meta name="theme-color" content="black" />
      </Helmet>
  <Layout>
  <div className="portfolio-container" style={{paddingTop: "15vh"}}>

        <img width="100%" src ={press} alt=""/>
        
       </div>
     

   

  </Layout>
    
  
  
    </div>
}
