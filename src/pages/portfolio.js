import React from "react"
import Layout from '../components/layout2'
import wineone from '../images/Pres VynTrade + Molinos-07.jpg'
import winetwo from '../images/Pres VynTrade + Molinos-08.jpg'
import winethree from '../images/Pres VynTrade + Molinos-09.jpg'
import winefour from '../images/Pres VynTrade + Molinos-10.jpg'
import winefive from '../images/Slide1.jpg'
import { Helmet } from 'react-helmet'

export default function Portfolio() {
  
  return <div>
      <Helmet>
        <title>Vyntrade  Portfolio</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>
      <Layout>
         <div >
<h1>Portfolio</h1>
<div className="portfolio-container">
  <div>
     <img width = "100%" src={wineone} alt="wineone"/>
  </div>
  <div>
     <img width = "100%" src={winetwo} alt="wineone"/>
  </div>

  <div>
     <img width = "100%" src={winethree} alt="wineone"/>
  </div>

  <div>
     <img width = "100%" src={winefour} alt="wineone"/>
  </div>
 
  <div style={{display: "flex", flexDirection: "column"}}>
  <h2 style={{color: "green", textAlign: "center"}}>Organic</h2> <br/>
     <img width = "100%" src={winefive} alt="wineone"/>
  </div>



</div>
</div>
  </Layout>
  </div>
}
