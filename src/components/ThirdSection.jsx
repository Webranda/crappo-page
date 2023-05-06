import React, { useState } from 'react'
import image1 from '../assets/Crypto-images/bitcon.png'
import image2 from '../assets/Crypto-images/ethereum.png'
import image3 from '../assets/Crypto-images/litecoin.png'
import Card from '../components/Card'

const ThirdSection = () => {

  const [activeCard, setActiveCard] = useState(-1)

    const handleClick = (index) => {
        setActiveCard(index)
    }

  return (
    <div className='thirdSection'>
      <h2 className='thirdSection__title'>Trade securely and market the high growth cryptocurrencies.</h2>
      <div className='thirdSection__cards'>
        <Card isActive={activeCard === 0}
                handleClick={() => handleClick(0)} 
                image={image1} 
                title='Bitcoin' 
                titleSpan='BTC' 
                body='Digital currency in which a record of transactions is maintained.'/>
        <Card isActive={activeCard === 1}
                handleClick={() => handleClick(1)} 
                image={image2} 
                title='Ethereum' 
                titleSpan='ETH' 
                body='Blockchain technology to create and run decentralized digital applications.'/>
        <Card isActive={activeCard === 2}
                handleClick={() => handleClick(2)} 
                image={image3} 
                title='Litecoin' 
                titleSpan='LTC' 
                body='Cryptocurrency that enables instant payments to anyone in the world.'/>
      </div>
    </div>
  )
}

export default ThirdSection
