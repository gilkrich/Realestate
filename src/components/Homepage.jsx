import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Carousel from 'better-react-carousel'
import { Outlet, Link, useParams } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import pexels from '../images/pexels.jpg'


function Homepage({ value, setvalue, fakevalue }) {
  const [input, setinput] = useState('')
  return (
    <div className='home-page-container' >
      <div>
        <div className='hero-card'>
          <h1 className='hero-card-text header' style={{fontfamily:'Oswald'}}>Discover Your Dream Home: Find the Perfect Property for Your Lifestyle</h1>
          {/* <h2 className='hero-card-text mini-header'>write to get started with finding the best home for you</h2> */}
          <div className='button-in'>
            <input type="search" className='search-bar' placeholder='search by city...' onChange={e => setinput(e.target.value)} />
            {/* <Link to={`/products?search=${input}`}> */}
            <Link to='products' state={{ inp: input }}>
              <Button variant="contained" id='searchbutton'><SearchIcon /></Button>
            </Link>
          </div>
        </div>

        <img src={pexels} alt="" className='hero-image' />

      </div>
      <br />
      <br />

      <h1 style={{ textAlign: 'center' }} className='header'>Buy Or Rent Houses</h1>
      <br />
      <br />
      <div>
        <Carousel cols={3} rows={1} gap={10} loop>
          <Carousel.Item>
            <img width="100%" height="80%" src="https://www.vanulaw.com/wp-content/uploads/2017/10/house-03.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" height="80%" src="https://cdn.rennie.com/images/images/032/226/847/original/4c209b11643355c6eb894edd3989012b.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" height="80%" src="https://i.dailymail.co.uk/i/pix/2017/12/16/00/475E297500000578-5185087-image-a-1_1513382476683.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" height="80%" src="https://cdn-wp.photoup.net/wp-content/uploads/2016/06/27175931/9-Tips-For-Shooting-Real-Estate-Exteriors.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" height="80%" src="https://thumbs.dreamstime.com/b/american-home-7419017.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <img width="100%" height="80%" src="https://st.hzcdn.com/simgs/pictures/exteriors/modern-exterior-sdg-architecture-inc-img~c661c8640fecf39c_14-3129-1-7e49ae7.jpg" />
          </Carousel.Item>
        </Carousel>
        <div className='flex-divs'>
      <Link id='view-more-link'> <button className='view-more'>View more</button></Link>   
        </div>

        <br />
        <br />
        <br />

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
        <br />
        <br />
        <div className='ad3' >
          <div className='ad-side-left3'>
            <img src="https://img.freepik.com/premium-vector/woman-headphones-with-laptop-answers-calls-background-wall-clock-call-center_484720-2786.jpg?w=2000" alt="" className='contact-images-size' />
          </div>
          <div className='ad-side-right2'>
            <div style={{display:'flex',alignItems:'center'}}>
            <input type='email' className='email'/>
            <button className='send-button'><MailOutlineIcon style={{height:'3vh'}}/></button>
            </div>
            <h2 className='mini-header'>the most wholesome and proffesional agents</h2>
          </div>
        </div>
     <br />
     <br />
        <div className='ad2' style={{backgroundColor:'white'}}>
          <div className='ad-side-right'>
            <h1 className='header'>with our agents its a matter of time to find your home</h1>
            <h2 className='mini-header'>the most wholesome and proffesional agents</h2>
            <button className='ad-button'>chat with them</button>
          </div>
          <div className='ad-side-left'>
            <img src="https://www.bankrate.com/2022/11/22154629/How-to-find-the-best-real-estate-agent-when-youre-ready-to-buy.jpg?auto=webp&optimize=high&crop=16:9" alt="" className='ad-images-size' />
          </div>
        </div>

  

          


      </div>



    </div>
  )
}

export default Homepage
