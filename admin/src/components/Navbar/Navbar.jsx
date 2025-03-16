import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className=''>
        <div className="navbar">
        <img className='logo' src={assets.logo} alt="" height={85} />
     
     <img className='profile' src={assets.profile_image} alt="" />
    
        </div>
        <div className="text">
            <p >Admin Panel</p>
        </div>
     
    </div>
    
  )
}

export default Navbar
