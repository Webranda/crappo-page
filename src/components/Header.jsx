import React from 'react'
import Image from '../assets/Crypto-images/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={Image}/>
      <nav className='header__nav'>
        <ul>
          <li><a href='/#'>Products</a></li>
          <li><a href='/#'>Features</a></li>
          <li><a href='/#'>About</a></li>
          <li><a href='/#'>Contact</a></li>
        </ul>
        <div className='auth'><a href='/#'>Login</a> <a className='btn' href='/#'>Register</a></div>
      </nav>
    </div>
  )
}

export default Header
