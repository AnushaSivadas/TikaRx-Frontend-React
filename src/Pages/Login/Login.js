import React from 'react'
import LoginBox from '../../Components/LoginBox/LoginBox'
import './Login.css'
import TikaLogo from '../../Images/TikaLogo.png'
import NextScience from '../../Images/NextScience.png'

const Login = () => {
  return (
    <div className='login'>
      <div className='top-left'>
        <img className='logo' src={TikaLogo}  alt='LOGO' />
      </div>
      <div className='top-right'>
        {/* NEXT SCIENCE */}
        <img className='next' src={NextScience}  alt='LOGO' />
      </div>
      <div className='login-part'>
        <LoginBox />
      </div>
    </div>
  )
}

export default Login