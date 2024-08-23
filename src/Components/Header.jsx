import React from 'react'
import Input from './Input'
import Button from './Button'
const Header = () =>
{
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            {/* logo */}
            <div className='logo'>
                <img src="https://internship.gwingsoftwaretechnologies.com/images/logo.png" width={'80px'} alt="" />
            </div>

            {/* search bar */}
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
                <Input placeholder='Search' />

                <h6>News</h6>

                <h6>About</h6>

                <Button name='Logout' />
            </div>
        </div>
    )
}

export default Header
