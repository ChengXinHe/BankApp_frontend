import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function ConHeader() {

    const [roleName, setRoleName] = useState('admin');
    const [userName, setUserName] = useState('Jenny');

    return (
        <div className='header' id='header'>
            <ul className="nav nav-pills">
                <li className="nav-item" >
                    <img src={require("../photo/logo512.png")} alt="logo" width="" height="50" />
                </li>
                <li className="nav-item">
                <Link to="/home" className="navbar-brand">Home</Link>
                </li>
                <li className="nav-item"></li>
                <Link to="/logout" className="navbar-brand">Logout</Link>
                <li className='welcome'>
                    <p>Welcome {roleName} {userName}!</p>
                </li>
            </ul>

        </div>
    );

}


export default ConHeader