import React from 'react'
import imagelink from '../assets/Crypto-images/btn-vector.png'

const Card = ({ image, title, titleSpan, body, isActive, handleClick }) => {

    return (
        <div className='card'
            style={{
                backgroundColor: isActive ? '#2B076E' : '#ffffff',
                color: isActive ? '#ffffff' : '#000000',
            }}
            onClick={handleClick}
        >
            <img src={image}/>
            <div className='card__titleGroup'><h3 className='card__title'>{title}</h3><h5>{titleSpan}</h5></div>
            <p className='card__body'>{body}</p>
            <a className='btn__primary' href='/#'><img className='arrow' src={imagelink}/></a>
            <a className='btn btn__active' href='/#'>Start mining</a>
        </div>
    )
}

export default Card
