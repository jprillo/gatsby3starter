import React from 'react';
import {Link} from 'gatsby'



const Nav = () => {

    return(
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>   
                <li><Link to="/about">ABOUT</Link></li>                               
            </ul>
        </div>
        
    )
}




export default Nav;