import React from 'react'
import Image1 from "../assets/Crypto-images/feature-1-img.png";
import Image2 from "../assets/Crypto-images/feature-2-img.png";
import Image3 from "../assets/Crypto-images/feature-3-img.png";

const FourthSection = () => {
  return (
    <div className='fourthSection'>
      <div className='fourthSection__content'>
        <h3 className='fourthSection__heading'>
          Market sentiments, portfolio and run the infrastructure of your choice
        </h3>
        <div className='fourthSection__CTA'>
          <div className='CTA forSpacing'>
            <div className='CTA__content'>
              <h3 className='CTA__cardHeading'>Invest Smart</h3>
              <p className='CTA__cardBody'>Get full statistic information about the behaviour of buyers and sellers will help you make the decision.</p>
              <button className='btn'>Learn More</button>
            </div>
            <img src={Image1} alt='feature1'/>
          </div>
          <div className='CTA forSpacing'>
            <img src={Image2} alt='feature1'/>
            <div className='CTA__contentRight'>
              <h3 className='CTA__cardHeading'>Detailed Statistics</h3>
              <p className='CTA__cardBody'>View all mining related information in realtime, at any point, at any location and decide which polls you want to mine in.</p>
              <button className='btn'>Learn More</button>
            </div>
          </div>
          <div className='CTA'>
            <div className='CTA__content'>
              <h3 className='CTA__cardHeading'>Grow your profit and track your investments</h3>
              <p className='CTA__cardBody'>Use advanced analytical tools, Clear TradeView charts lets you track current and historical profit investments.</p>
              <button className='btn'>Learn More</button>
            </div>
            <img src={Image3} alt='feature1'/>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default FourthSection
