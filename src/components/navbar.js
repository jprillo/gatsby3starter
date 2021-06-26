import React from 'react'
import {Link} from 'gatsby'

export default function Navbar({data}) {
    return (
        <div >
            <Link style={{padding: "1em", margin: "1em", }} to="/">HOME</Link>
             {data.allMarkdownRemark.edges.map(({ node }) => (


  <Link style={{padding: "1em", margin: "1em", }} key={node.id} to={node.fields.slug}>{node.frontmatter.title}</Link>

 
 
))}
        
    
        </div>
    )
}
