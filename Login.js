import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    function mySubmit(){
        navigate('/daseboard')
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={mySubmit}>LOGIN</button>
    </div>
  )
}

export default Login