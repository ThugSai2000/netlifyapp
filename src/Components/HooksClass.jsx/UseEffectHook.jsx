import React, { useEffect, useState } from 'react'

const UseEffectHook = () =>
{
    const [count, setCount] = useState(0)

    function increment()
    {
        setCount(count + 1)
    }

    useEffect(() =>
    {
        document.title = `${count} new message!`
        setCount(5)

    }, [])

    return (
        <div>

            <h1> {count} times clicked</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseEffectHook
