import React from 'react'
import Input from './Input'
import Button from './Button'
import './style.css'
const Header = () =>
{
    return (
        <div class='main-header' style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            {/* logo */}
            <div className='logo'>
                <img src="https://internship.gwingsoftwaretechnologies.com/images/logo.png" width={'80px'} alt="" />
            </div>

            {/* search bar */}
            <div className='header-right'>
                <div>
                    <Input placeholder='Search' />
                </div>

                <h6>News</h6>

                <h6>About</h6>

                <div>
                    <Button name='Logout' />
                </div>

            </div>
        </div>
    )
}

export default Header
