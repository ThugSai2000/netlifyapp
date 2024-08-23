import React from 'react'
import './layout.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const AppLayout = () =>
{
    return (
        <div>
            {/* Header */}
            <div className="header">
                <Header />
            </div>

            {/* SideBar */}
            <div className="sideBar"><Sidebar /></div>




        </div>
    )
}

export default AppLayout
