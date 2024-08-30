import React from 'react'

const Sidebar = () =>
{
    return (
        <div>
            <nav className="sidebar">
                <div className="menu-content">
                    <ul className="menu-items" style={{ padding: 0 }}>
                        <div className="menu-title">Netlify User</div>

                        <li className="item">
                            <a href="/app">
                                Sites
                            </a>
                        </li>
                        <li className="item">
                            <a href="/app/build">
                                Build
                            </a>
                        </li>
                        <li className="item">
                            <a href="/app/integration">
                                Intergration
                            </a>
                        </li>
                        <li className="item">
                            <a href="/app/domains">
                                Domains
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Sidebar
