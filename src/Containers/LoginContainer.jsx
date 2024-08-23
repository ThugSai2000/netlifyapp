import React from 'react'
import './loginContainer.css'
import Input from '../Components/Input'
import Button from '../Components/Button'

const LoginContainer = () =>
{
    return (
        <div className='container'>
            <h1>Login</h1>
            <div style={{ padding: '15px' }}>
                <Input placeholder='Name' />
            </div>

            <div style={{ padding: '15px' }}>
                <Input placeholder='Password' />
            </div>

            <div style={{ padding: '15px' }}>
                <Button name='Login' />
            </div>






        </div>
    )
}

export default LoginContainer
