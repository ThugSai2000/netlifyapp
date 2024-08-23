import React from 'react'
import './layout.css'
import Header from '../Components/Header'
import Nest from '../Components/Nest'

const AppLayout = () =>
{
    return (
        <div>
            {/* Header */}
            <div className="header">
                <Header />
            </div>

            {/* SideBar */}
            <div className="sideBar"><Nest /></div>




        </div>
    )
}

export default AppLayout
