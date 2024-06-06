import React from 'react'
import {useNavigate} from 'react-router-dom'

function Contact() {
  let navigate = useNavigate();
  return (
    <div>
        <h1>Contect Form</h1>
        <button onClick={() => {navigate("/")}}>Send</button>
    </div>
  )
}

export default Contact;