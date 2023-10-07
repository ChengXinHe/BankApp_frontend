import React from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import ConNavBar from '../common/ConNavBar'
import ConHeader from '../common/ConHeader'
import CreateStaff from './action/CreateStaff'
import ViewStaff from './action/ViewStaff'



function AdminIndex() {

    return (
        <div  class="container-fluid">
            <Router >
                <div class="row">
                    <ConHeader />
                    <Routes>
                        <Route exact path="/" element={<ViewStaff />} />
                        <Route exact path="/home" element={<CreateStaff />} />
                        <Route exact path="/logout" element={<ViewStaff />} />
                    </Routes>
                </div>

                <div class="row">
                    <ConNavBar />
                    <Routes>
                        <Route exact path="/" element={<ViewStaff />} />
                        <Route exact path="/createstaff" element={<CreateStaff />} />
                        <Route exact path="/viewstaff" element={<ViewStaff />} />
                    </Routes>
                </div>
            </Router>

            <div class="row">

            </div>

        </div>


    );
}


export default AdminIndex