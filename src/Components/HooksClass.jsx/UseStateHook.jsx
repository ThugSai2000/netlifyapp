import React, { useState } from 'react'

const UseStateHook = () =>
{

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    // current value = 4
    // updating value = count+1 = 4+1 = 5
    function increment()
    {
        setCount(count + 1)
    }

    return (
        <div>
            <input type="text" name="" onChange={(e) => setName(e.target.value)} id="" />
            <h1>{name} : {count} times clicked</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseStateHook






