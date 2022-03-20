
  import React from "react"
  import {Link} from "gatsby"
  import logo from '../images/logo.png'
  

  const activeStyle = {
      color: 'lightgrey',
      
    }
  
  
  const NavBar = ({ toggleNavbar, isActive }) => {    
      return(
          <div className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}> 
  
              <div id="main-nav-wrap">
                  <div className="logo-wrap">
                      <Link to="/">
                    <img width="100%" src= {logo} alt="Vyntrade logo" /> </Link>
  
                  </div>
                  
                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                                     <li><Link className="hack" activeStyle={activeStyle} to="/">Home</Link></li>
                              <li><Link to="/about/" activeStyle={activeStyle} className="hack">About</Link></li>
                              <li><Link to="/services/" activeStyle={activeStyle} className="hack">Services</Link></li>
                              <li><Link to="/portfolio/" activeStyle={activeStyle} className="hack">Portfolio</Link></li>
                              <li><Link to="/clients/" activeStyle={activeStyle} className="hack">Clients</Link></li>
                              <li><Link to="/press/" activeStyle={activeStyle} className="hack">Press</Link></li>
                              <li><Link to="/contact/" activeStyle={activeStyle} className="hack">Contact</Link></li>
                             
                       
  
                            
                          </ul>
                      </div>
                   
                  </div>
   

      
                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}
              
              data-target='nav-menu'
              onClick={toggleNavbar}
              aria-hidden={true}>
                          <span className="line line01"></span>
                          <span className="line line02"></span>
                          <span className="line line03"></span>
                      </div>
                  </div>
                  
              </div>
          </div>
  
      )
  }
  export default NavBar
