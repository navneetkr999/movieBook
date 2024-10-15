import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className='footer'>
        <p className='footer-text'>
          &#169; {currentYear} Movie Book, All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer;
