import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import real from '../images/real.png'



function Layout() {
  return (
    <div className='main-container'>
      <nav id='navbar'>
        <div >
          <Link to='/' > <img src={real} alt="" className='logo' /></Link>
        </div>
        <div id='nav-links-side'>
          <Link className='nav-link'>Invest</Link>
          <Link to='Products' className='nav-link'>Houses</Link>
          <Link className='nav-link' to='agents'>Agents</Link>
          <Link to='favorits' className='nav-link'>Favorites</Link>
        </div>
        <div className='nav-login-side'>
        <button className='login-button'><Link to='user' className='login-button-link'>Login</Link></button>
      <button className='signup-button'><Link to='user/Signup' className='signup-button-link'>Signup</Link></button>   
        </div>
      </nav>
      <Outlet />
      <footer className='footer'>
        <div className='nav-links-div'>
          <Link  className='footer-link nav-bar-text'>About us</Link>
          <p className='nav-bar-text'>Our buissnes department</p>
          <p className='nav-bar-text'>Privacy Policy</p>
          <p className='nav-bar-text'>Security Policy</p>
        </div>
        <div className='nav-links-div'>
          <Link className='footer-link nav-bar-text'>Customer Service</Link>
          <p className='nav-bar-text'>needed</p>
          <p className='nav-bar-text'>Contact Us</p>
          <p className='nav-bar-text'>Cancelling a transaction</p>
        </div>
        <div className='nav-links-div'>
          <Link className='footer-link nav-bar-text'>our website & centers</Link>
          <p className='nav-bar-text'>our physical centers</p>
          <p className='nav-bar-text'>accessibility</p>
          <p className='nav-bar-text'>terms of use</p>
        </div>
        <div className='social-media'>
          <img src="https://www.citypng.com/public/uploads/preview/-11595327237ulqckjabpb.png" alt="" height='30px' className='social-media-images' />
          <img src="https://www.citypng.com/public/uploads/preview/-51614117422ddshgpwbbp.png" alt="" height='30px' className='social-media-images' />
          <img src="https://toppng.com/uploads/preview/youtube-icon-youtube-icon-logo-white-transparent-11553490886iqtu1kxymg.png" alt="" height='30px' className='social-media-images' />
          <img src="https://w7.pngwing.com/pngs/389/430/png-transparent-instagram-social-media-instagram-black-social-social-media-logo-icon.png" alt="" height='30px' className='social-media-images' />
        </div>
      </footer>
    </div>
  )
}

export default Layout
