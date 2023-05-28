import React from 'react'
import { Link } from 'react-router-dom'

const Agentcard = ({ image, name, years ,info}) => {
  return (
    <div>

    <div className='agents-card'>
      <img src={image} alt="" width='400px' height='215px' className='agent-card-iamge' />
      <div className='agentcards-info'>
        <h2 style={{ margin: '0' }}>{name}</h2>
        <p>{years}</p>
        <p>{info}</p>
        <p>Contact and talk with the agents</p>
        <div className='agents-social-container'>
          <Link><img src="./src/images/facebookcolor.png" alt="" className='agent-social-media' /></Link>
          <Link><img src="./src/images/gmail.png" alt="" className='agent-social-media' /></Link>
          <Link><img src="./src/images/instegram.png" alt="" className='agent-social-media' /></Link>
          <Link><img src="./src/images/whatsapp.png" alt="" className='agent-social-media' /></Link>
        </div>
    </div>

      </div>
    </div>
  )
}

export default Agentcard 
