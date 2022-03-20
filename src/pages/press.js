import React from "react"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'

import press from '../images/press.png'





export default function Home() {
  
  return <div>
       <Helmet>
        <title>Vyntrade  Vineyard to Trade</title>
        <meta name="description" content="Create and Implement Profitable Business Opportunities in the US Wine Market for ​Wine Producers through Direct Sales Strategies to Key Retail Clients." />
        <meta name="theme-color" content="black" />
      </Helmet>
  <Layout><h1 style={{textAlign: "center"}}>Press</h1>
  <div className="portfolio-container" style={{padding:" 0 15vw"}}>
     
        
        <img width="100%" src ={press} alt=""/>
        
       </div>
     

   

  </Layout>
    
  
  
    </div>
}
