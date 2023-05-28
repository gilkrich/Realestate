import React from 'react'
import aboutus from '../images/aboutus.jpg'
const Aboutus = () => {
  return (
    <div>
        <img src={aboutus} alt="" className='aboutus-image'/>
        <div className='ad' style={{backgroundColor:'white'}}>
          <div className='ad-side-left'>
            <img src="https://www.mymilestone.com/blog/wp-content/uploads/2016/11/home-buying-autumn-5.jpg" alt="" className='ad-images-size' />
          </div>
          <div className='ad-side-right'>
            <h1 className='header'>its time to start the jouerny to your new home</h1>
            <h2 className='mini-header'>To learn more about us and what we do</h2>
            <button className='ad-button'>get started</button>
          </div>
        </div>
    </div>
  )
}

export default Aboutus
