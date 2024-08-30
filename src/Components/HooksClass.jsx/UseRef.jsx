import React, { useEffect, useRef, useState } from 'react'

const UseRef = () =>
{
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)

    const element = useRef()


    useEffect(() =>
    {
        element.current.style.backgroundColor
            = 'red'

        element.current.style.width = '300px'



    })
    return (
        <div>
            <input type="text" name="" onChange={(e) => setName(e.target.value)} id="inputele" ref={element} />
            <h1>Name : {name}</h1>

            <h2>Render : {count.current}</h2>
        </div>
    )
}

export default UseRef
