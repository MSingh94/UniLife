import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="left-container">
        <h2 >Keep in Touch</h2>
        <h3>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</h3>
        <input className='footer-input' type="text" placeholder='Your email' />
      </div>
    </div>
  )
}

export default Footer
