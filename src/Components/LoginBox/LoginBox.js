import React from 'react'
import Title from '../Title/Title'
import './LoginBox.css'
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const navigate = useNavigate();

    return (
        <div className='login-box'>
            <div className='login-title'><Title/></div>
            <h2>Login</h2>
            <div className='input-box'>
                <label>&nbsp; &nbsp;User ID:</label>
                <input type='text' placeholder='username' />
            </div>
            <div className='input-box'>
                <label>Passcode:</label>
                <input type='password' placeholder='password' />
            </div>
            <div className='remember-forgot'>
                <input type='checkbox'/>
                <div>Remember me</div>
                <div className='forgot'>Forgot User ID/PassCode</div>
            </div>
            <button type='submit' onClick={ ()=>navigate('/dashboard')}>Login</button>
          
        </div>
    )
}

export default LoginBox