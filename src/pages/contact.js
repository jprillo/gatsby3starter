import * as React from "react"



const ContactPage = ({data}) => {
  return (
    <main >
      <title>Contact</title>
      <h1>
        This is the Netlify example to handle forms. It is easy to set up on thier end and you can forward it to whatever email you want. The honey pot catches most of the spam and Winnie the Pooh.         
      </h1>
     
      <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
     
    </main>
  )
}


export default ContactPage
