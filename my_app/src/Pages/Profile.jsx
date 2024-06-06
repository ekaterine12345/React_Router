import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {
  let {user} = useParams();
  return (
    <div>
    {user ? (
      <div>Profile Page belongs to {user}</div>
    ): (
      <div>General Profile Page</div>
    )}
  </div>
  )
}

export default Profile;