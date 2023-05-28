import React from 'react'
import TextField from '@mui/material/TextField';
import { Outlet, Link, useParams } from 'react-router-dom'
import google from '../images/google.png'
import facebook from '../images/facebookcolor.png'


const Signuppage = () => {
  return (
    <div>
       <div className='sign-page'>
       <h2>Sign-up</h2>
       <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email'/>
        <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs'type='password'/>
        <TextField id="filled-basic" label="Confirm Password" variant="filled" className='user-inputs'type='password'/>
        <div style={{width:'100%' ,marginLeft:'113px'}}>
        <input type="checkbox" name="remember" id="remember" /><label htmlFor="remember">remember me</label>
        </div>
        <button className='user-buttons'>Sign-up</button>
        <p>Or sign-up with</p>
        <div className='with'>
            <button className='with-button'> <img src={facebook} alt="" width='20px' height='20px' /> facbook</button>
            <button className='with-button'><img src={google} alt="" width='20px' height='20px'/> google</button>
        </div>
         <p>Already a member?<Link to='/user'>Login here</Link></p>
    </div>
    </div>
  )
}

export default Signuppage
