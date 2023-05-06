import React from 'react'

const Subscription = () => {
  return (
    <div className='subscription'>
      <div className='subscription__form'>
        <h3 className='subscription__heading'>
          Start mining now
        </h3>
        <p className='subscription__body'>Join Crappo now to get the latest crypto news and start mining</p>
        <form>
          <input type='email' label='email' placeholder='Enter email address' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Subscription
