import React, { useState } from 'react'

const SecondSection = () => {
  const [hashRate, setHashRate] = useState("");
  const [estimatedRevenue, setEstimatedRevenue] = useState(0);

  
  // Function to handle the input change
  function handleInputChange(e) {
    const value = e.target.value;
    setHashRate(value);
  }

  // Function to handle the form submit
  function handleSubmit(e) {
    e.preventDefault();

    const currentPrice = 400; // in USD
    const currentDifficulty = 3.5 * 10 ** 3; // in ETH

    const rewardPerBlock = 2; // in ETH
    const rewardInUSD = rewardPerBlock * currentPrice;

    const estimatedRewardPerDay =
      (hashRate * rewardInUSD * 3600 * 24) / (currentDifficulty * 10 ** 6);

    if (estimatedRewardPerDay > 0) {
      const estimatedRevenue = estimatedRewardPerDay.toFixed(2);
      setEstimatedRevenue(estimatedRevenue);
    } else {
      alert("Please enter a valid hash rate.");
    }
  }

  return (
    <div className='secondSection'>
      <div className='secondSection__top'>
        <div className='secondSection__text'>
          <h2>
            Check how much you can earn
          </h2>
          <p>
            Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className='secondSection__form'>
          
          <form onSubmit={handleSubmit}>
            <p>Enter your hash rate</p>
            <input type='number' id="hashRate" value={hashRate} onChange={handleInputChange} label='TH/s' placeholder='TH/s'/>
            <button type="submit" className='btn'>Calculate</button>
          </form> 
        </div>
      </div>
      {estimatedRevenue !== null ? (
      <div className='secondSection__bottom'>
          <div className='secondSection__form extra'>
                <p className='extra__color'>ESTIMATED 24 HOUR REVENUE:</p>
                <h3 className='extra__color'> <span>${estimatedRevenue}</span></h3>
                <p>Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
        </div>
      ) : null}
    </div>
  )
}

export default SecondSection
