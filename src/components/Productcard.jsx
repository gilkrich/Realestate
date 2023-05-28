import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Productcard = ({ value }) => {
  let { id } = useParams()
  const found = value.find((element) => element?.zpid == id);

  return (
    <div id='main-product-page' >
      <div className='house-side'>
        <div className='main-image-container'><img src={found?.imgSrc} alt="" className='big-product-image' /></div>
        <div style={{display:'flex',backgroundColor:'white',width:'100%',height:'100%'}}>
        <div className='house-info'>
          <h2>{`$${found?.price}`}</h2>
          <h4>{`rent $${found.rentZestimate}`}</h4>
          <div className='rooms'><span>{`${found.bedrooms} Beds|`}</span><span>{`${found.bathrooms} Bath|`}</span></div>
          <h3>{`${found.country} ${found.state} ${found.city} ${found.streetAddress} `}</h3>
        </div>
        <div style={{width:'226px'}}>
          <img src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" alt="" width='200px' height='100px' className='google-maps'/>
        </div>
        </div>
      </div>
      <div className='contact-side'>
        <h2 className='cotact-middle'>conact our agent</h2>
          <TextField id="standard-basic" label="name" variant="standard" />
          <TextField id="standard-basic" label="email" variant="standard" />
          <TextField id="standard-basic" label="phone-number" variant="standard" />
        <textarea type="text" placeholder='massage to the agent' style={{ height: "16vh", resize: "none" }} className='cotact-big' />
        <div>
          <input type="checkbox" name="agree" id="agree" /><label htmlFor="agree">I agree to the Properties's Privacy Policy</label>
        </div>
        <p className='cotact-middle'>Check the  box to indicate that you have read and agree with our Privacy Policy</p>
        <button className='buy-button'> Send an offer</button>
      </div>
    </div>
  )
}

export default Productcard
