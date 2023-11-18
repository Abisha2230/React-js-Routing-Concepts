import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>User profile page</h1>
        <p>user id <b>{id}</b></p>
    </div>
  )
}

export default User