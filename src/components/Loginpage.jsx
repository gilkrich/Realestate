import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Loginpage = () => {
  return (
    <div className='Login-page'>
       <h2>Login</h2>
       <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email'/>
        <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs'type='password'/>
        <div style={{width:'100%' ,marginLeft:'113px'}}>
        <input type="checkbox" name="remember" id="remember" /><label htmlFor="remember">remember me</label>
        </div>
        <button className='user-buttons'>Login</button>
        <p>Or login with</p>
        <div className='with'>
            <button className='with-button'> <img src="./src/images/facebookcolor.png" alt="" width='20px' height='20px' /> facbook</button>
            <button className='with-button'><img src="./src/images/google.png" alt="" width='20px' height='20px'/> google</button>
        </div>
         <p>Not a member?<Link to='Signup'>Sign up here</Link></p>
    </div>
  )
}

export default Loginpage
