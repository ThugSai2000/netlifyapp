import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserContainer = () =>
{

    const [userData, setUserData] = useState([])

    // console.log("user Data : " + JSON.stringify(userData));


    useEffect(() =>
    {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) =>
            {
                return setUserData(response.data);

            })

        // fetch("https://jsonplaceholder.typicode.com/todos")
        //     .then((response) =>
        //     {
        //         return response.json()
        //     }).then((data) =>
        //     {
        //         console.log(data);

        //     })
        // promises

    }, [])

    return (
        <div style={{ padding: '30px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
            {/* [{},{},{}] */}
            {
                userData.map((user) =>
                {
                    return <div className="card" style={{ width: '50%', height: '100px', border: '3px solid grey', marginBottom: '20px' }}>

                        <h3>UserID : {user.userId}</h3>
                        <p>Title : {user.title}</p>

                    </div>
                })
            }



        </div>
    )
}

export default UserContainer
