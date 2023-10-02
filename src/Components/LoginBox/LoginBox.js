import React from 'react'
import Title from '../Title/Title'

const LoginBox = () => {
    return (
        <div className='login-box'>
            <Title/>
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
            <button type='submit'>Login</button>
        </div>
    )
}

export default LoginBox