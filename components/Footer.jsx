import React from 'react'
import Image from 'next/image'
import logo3 from '../src/assets/Logo3.png'

import {GrFacebookOption, GrTwitter, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='logo'>
          <Image src={logo3} width={150} height={70} alt='logo' />
          <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
          <div className='icon-container'>
            <div><GrTwitter size={20} /></div>
            <div><GrFacebookOption size={20} /></div>
            <div><GrLinkedinOption size={20} /></div>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className='footer-links'>
          <h3>Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2022 Wear Flare</p>
        <p>Design by. <span>Weird Design Studio</span></p>
        <p>Code by. <span> Fyp_Members</span></p>
      </div>
    </footer>
  )
}

export default Footer