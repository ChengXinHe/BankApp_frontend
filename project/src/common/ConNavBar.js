import React from 'react'
import { useNavigate } from 'react-router-dom';

function ConNavBar() {

    const navigate = useNavigate();

    const handleNavigateCreatestaff = () => {
        // 执行导航
        navigate('/admin/createstaff');
    };

    const handleNavigateViewstaff = () => {
        // 执行导航
        navigate('/admin/viewstaff');
    };


    return (
        <div className='navbar'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button onClick={handleNavigateCreatestaff} className="nav-link">Create Staff</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={handleNavigateViewstaff} className="nav-link">View Staff</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ConNavBar