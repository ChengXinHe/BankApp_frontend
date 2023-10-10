import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // 引入Provider
import store from './redux/store'; // 导入Redux store
import LoginPage from './common/LoginPage';
import AdminIndex from './admin/AdminIndex';
import ViewStaff from './admin/action/ViewStaff';
import CreateStaff from './admin/action/CreateStaff';
import ConHeader from './common/ConHeader';
import ConNavBar from './common/ConNavBar';

function App() {
  return (
    <Provider store={store}> {/* 使用Provider并传递store */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminIndex />}>
            <Route path="viewstaff" element={<ViewStaff />} />
            <Route path="createstaff" element={<CreateStaff />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;