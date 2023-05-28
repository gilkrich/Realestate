import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'

const Userpage = () => {
  return (
    <div className='userpage'>
       <Outlet/>
    </div>
  )
}

export default Userpage
