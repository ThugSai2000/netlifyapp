import React from 'react'
import './style.css'

const Button = (props) =>
{
    const { name } = props
    return <button id='button-component'>{name}</button>
}

export default Button
