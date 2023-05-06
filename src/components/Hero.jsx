import React from 'react'
import Image from '../assets/Crypto-images/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left'>
        <div className='hero__leftTop'>
          <span><p>75% SAVE</p></span>
          <p>For the Black Friday weekend</p>
        </div>
        <h1>Fastest & secure platform to invest in crypto</h1>
        <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
        <a href='/#' className='btn'>Try for FREE</a>
      </div>
      <div className='hero__right'>
        <img src={Image}/>
      </div>
    </div>
  )
}

export default Hero