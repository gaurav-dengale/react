import React from 'react'
import Usercontext from '../Context/Usercontext';
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(Usercontext);
    if (!user) { return <div className='login'>Please login</div> }
  return (
    <div className='profile-box'>  Welcome, <strong>{user.username}</strong></div>
  )
}

export default Profile