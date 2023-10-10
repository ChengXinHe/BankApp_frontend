import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/action';

function ConHeader({ userData }) {
    
    const dispatch = useDispatch();

    const handleNavigate = () => {
        // 执行导航
        console.log(userData);
    };

    const handleLogout = () => {
        // 执行退出逻辑，例如清除本地存储中的令牌和Redux状态
        localStorage.removeItem('token');
        dispatch(logout());
      };


    return (
        <div className='header' id='header'>
            <ul className="nav nav-pills">
                <li className="nav-item" >
                    <img src={require("../photo/logo512.png")} alt="logo" width="" height="50" />
                </li>
                <li className="nav-item">
                    <Link to="/admin/viewstaff" onClick={handleNavigate} className="navbar-brand">Home</Link>
                </li>
                <li className="nav-item"></li>
                <Link to="/login" onClick={handleLogout} className="navbar-brand">Logout</Link>
                <li className='welcome'>
                    <p>Welcome {userData ? userData.username : 'Guest'}!</p>

                </li>
            </ul>

        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        userData: state.user,
    };
};


export default connect(mapStateToProps)(ConHeader);