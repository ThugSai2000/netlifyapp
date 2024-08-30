import React, { useState } from 'react'
import './layout.css'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import DashboardContainer from '../Containers/DashboardContainer'
import UserContainer from '../Containers/UserContainer'
import Dashboard from '../Pages/Dashboard'
import { Outlet } from 'react-router-dom'

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

            {/* Content */}
            <div className='content'>
                <Outlet />
                {/* <Dashboard /> */}
                {/* <DashboardContainer /> */}
                {/* <UserContainer /> */}
            </div>



        </div>
    )
}

export default AppLayout
