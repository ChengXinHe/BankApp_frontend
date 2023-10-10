import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConNavBar from '../common/ConNavBar'
import ConHeader from '../common/ConHeader'
import CreateStaff from './action/CreateStaff'
import ViewStaff from './action/ViewStaff'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function AdminIndex() {
    const navigate = useNavigate();
    const location = useLocation();

    const renderChildComponent = () => {
        if (location.pathname.endsWith('/viewstaff')) {
            return <ViewStaff />;
        } else if (location.pathname.endsWith('/createstaff')) {
            return <CreateStaff />;
        } else {
            // 如果路径不匹配任何子路由，可以进行处理，例如显示默认内容或导航到其他页面
            navigate('/admin/viewstaff'); // 默认导航到 /admin/viewstaff
            return null; // 或返回其他默认内容
        }
    };

    return (
        <div class="container-fluid">
            <header>
                <ConHeader />
                <ConNavBar />
            </header>
            {renderChildComponent()}
            <div class="row">
            </div>
        </div>
    );
}


export default AdminIndex