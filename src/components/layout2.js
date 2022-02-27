import React from "react"
import NavBar from "./navbar" 

import "../style/main.scss"

class Layout extends React.Component {

  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const {  children } = this.props
   
    
    return (
      <div >    
        <header>  
                 
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
             
          </header>
        <main className="contain">{children}</main>   

      
           
        <footer >         
          <p style={{color: "white"}}> Vyntrade ©{new Date().getFullYear()}</p>
        </footer>
      
      </div>
    )
  }
}

export default Layout
