import React from 'react'
import Image from '../assets/Crypto-images/crappo.png'
import Logo1 from '../assets/Crypto-images/visa.png'
import Logo2 from '../assets/Crypto-images/mastercard.png'
import Logo3 from '../assets/Crypto-images/bitcoin.png'
import Facebook from '../assets/Crypto-images/facebook.png'
import Instagram from '../assets/Crypto-images/insta.png'
import Youtube from '../assets/Crypto-images/youtube.png'
import Twitter from '../assets/Crypto-images/twitter.png'
import LinkedIn from '../assets/Crypto-images/linkedin.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <img src={Image} alt='footer logo'/>
        <div className='footer__links'>
          <ul>
            <h3 className='linkHeading'>Quick Links</h3>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div className='footer__links'>
          <ul>
            <h3 className='linkHeading'>Resources</h3>
            <li><a href='#'>Download Whitepaper</a></li>
            <li><a href='#'>Smart Token</a></li>
            <li><a href='#'>Blockchain Explorer</a></li>
            <li><a href='#'>Crypto API</a></li>
            <li><a href='#'>Career</a></li>
          </ul>
        </div>
        <div className='payments'>
          <h3>We accept the following payment systems</h3>
          <div className='payments__images'>
            <img src={Logo1} alt='visa logo'/>
            <img src={Logo2} alt='mastercard'/>
            <img src={Logo3} alt='bitcoin'/>
          </div>
        </div>
      </div>
      <div className='footer__sub'>
        <p className='copyright'>
          2022 &#169; Crappo. All Rights Reserved.
        </p>
        <div className='socials' >
          <a href='#'><img src={Facebook}/></a>
          <a href='#'><img src={Instagram}/></a>
          <a href='#'><img src={Youtube}/></a>
          <a href='#'><img src={Twitter}/></a>
          <a href='#'><img src={LinkedIn}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
