import React from 'react'

const Input = (props) =>
{
    const { placeholder } = props
    return <input type="text" placeholder={placeholder} />
}

export default Input
