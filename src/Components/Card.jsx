import React from 'react'

const Card = (props) =>
{
    const { heading, content } = props
    return (
        <div style={{ width: "20%", height: '50px', borderTop: "15px solid gray", background: 'lightgray', borderRadius: '10px', paddingLeft: '10px' }}>
            <h3 style={{ margin: 0, textAlign: 'left' }}>{heading}</h3>

            <p style={{ margin: 0, textAlign: 'left' }}>{content}</p>
        </div>
    )
}

export default Card
