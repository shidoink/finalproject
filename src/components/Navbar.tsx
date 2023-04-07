import React from 'react'
import { Link} from 'react-router-dom'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Profile from './Profile'
import {useAuth0,} from "@auth0/auth0-react"
import { useState } from 'react'



const Navbar = () => {
    const {isAuthenticated}= useAuth0
    const {user}= useAuth0
    const Authenticated= useAuth0().isAuthenticated
    console.log(Authenticated)
    console.log(useAuth0().isAuthenticated)

    console.log(user)

    
  if (Authenticated){return (
    
    <div>
        <div>hello we are logged in good</div>
      <Link to='/'> Home </Link>
      <Link to='/dashboard'>Dashboard </Link>
     
      <LogoutButton/>
      <Profile/>
      
    </div>
  )
}
else {return (
    
    <div>
     <div>Hello we are logged out nice</div>
      <Link to='/'> Home </Link>
      <Link to='/dashboard'>Dashboard </Link>
     
      <LoginButton/>
      <Profile/>
      
    </div>
  )
}
}

export default Navbar
