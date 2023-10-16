import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password || !role) {
      // 验证输入是否完整
      alert('Please fill in all fields');
      return;
    }

    let loginUrl = '';

    switch (role) {
      case 'admin':
        loginUrl = 'http://localhost:8081/api/v1/auth/admin/signin';
        break;
      case 'staff':
        loginUrl = 'http://localhost:8082/api/v1/auth/staff/signin';
        break;
      case 'customer':
        loginUrl = 'http://localhost:8083/api/v1/auth/customer/signin';
        break;
      default:
        alert('Invalid role');
        return;
    }

    // 构建请求参数
    const requestData = {
      username,
      password,
    };

    // 发送登录请求
    fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 处理后端返回的数据
        if (data.code === 200) {
          // 存储数据到 Redux
          dispatch(setUser(data.data));
          // 将 token 存储在 localStorage 中
          localStorage.setItem('authToken', data.data.tokenType + " " + data.data.accessToken);
          localStorage.setItem('id', data.data.id);
          console.log("back");
          console.log(data.data);

          // 使用编程式导航自动跳转到 viewstaff 页面
          if (role === 'admin') {
            navigate('/admin/viewstaff');
          }
        } else {
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
      });


  };



  return (
    <div className='loginform'>

      <form className="needs-validation" noValidate>
        <h1>Login</h1>
        <div className="d-flex flex-column">
          {/* Username */}
          <div className="mb-3 col-md-12">
            <label htmlFor="validationCustomUsername" className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div className="mb-3 col-md-12">
            <label htmlFor="validationPassword" className="form-label">Password:    </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Role */}
          <div className="mb-3 col-md-9">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          {/* Login Button */}
          <div className="mb-3 col-md-12">
            <button className="btn btn-primary" type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
          {/* Register and Forgot Password */}
          <div className="mb-3 col-md-12">
            <a href="/register">Register</a> | <a href="/forgetusername">Forgot Password</a>
          </div>
        </div>
      </form>
    </div>




  );
}

export default LoginPage;
