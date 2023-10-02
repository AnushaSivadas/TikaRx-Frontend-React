import React from 'react'
import LoginBox from '../../Components/LoginBox/LoginBox'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className='top-left'>
        <img className='logo' src=" " alt='LOGO' />
      </div>
      <div className='top-right'>
        NEXT SCIENCE
      </div>
      <div className='login-part'>
        <LoginBox />
      </div>
    </div>
  )
}

export default Login