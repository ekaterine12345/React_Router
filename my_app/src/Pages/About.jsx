import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
        <h1>About us</h1>
        <p>about text</p>
        <button onClick={() => navigate("/")}>Send</button>
    </div>

  )
}
