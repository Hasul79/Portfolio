import React from 'react'
import './footer.css'
import {FaFacebookF , FaLinkedin , FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Hasmik Minasyan</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://github.com"> < FaGithub/></a>
        <a href="https://facebook.com"><FaLinkedin /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Hasmik Tutorials. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer