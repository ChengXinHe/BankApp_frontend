import React from 'react'
import { Link } from 'react-router-dom'

const ConNavBar = () => {
    return (
        <div className='navbar'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/createstaff" className="nav-link">Create Staff</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewstaff" className="nav-link">View Staff</Link>
                        </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ConNavBar