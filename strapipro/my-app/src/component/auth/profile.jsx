import React from 'react'

const Profile = () => {
    const userinfo=localStorage.getItem("user")
    console.log("userinfo",userinfo)
  return (
    <div>
    <h2> profile page of user </h2>
    </div>
  )
}

export default Profile
