import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function CreateStaff({ userData }) {
    const [formData, setFormData] = useState({
        staffusername: '',
        stafffullname: '',
        password: '',
        reenterPassword: '',
        approverid: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 在这里处理提交逻辑，可以向后端发送请求来创建 staff
        // 你可以使用 formData 中的数据

        if (formData.password !== formData.reenterPassword) {
            alert("Passwords are not same");
        }

        // console.log('CreateStaff:', userData); 
        formData.approverid = userData.id;
        const token = localStorage.getItem('authToken');

        if (token) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            };
        } else {
            // 处理没有找到 token 的情况
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userData.tokenType + " " + userData.accessToken
            },
        };

        const response = await axios.post('http://localhost:8081/api/v1/admin/staff', formData, config);


        console.log(response);
        if (response.data.code === 200) {
            alert("Successfully create the staff");
        } else {
            alert(response.data.errorMessage);
        }

        console.log(formData);
    };

    return (
        <div className='createStaff'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="staffusername" className="form-label">
                        Staff Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="staffusername"
                        name="staffusername"
                        value={formData.staffusername}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="stafffullname" className="form-label">
                        Staff Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="stafffullname"
                        name="stafffullname"
                        value={formData.stafffullname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Staff Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="reenterPassword" className="form-label">
                        Re Enter Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="reenterPassword"
                        name="reenterPassword"
                        value={formData.reenterPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="d-flex justify-content-center"> {/* 按钮居中 */}
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log('Redux State:', state.user); // 打印整个Redux状态树
    return {
        userData: state.user,
    };
};


export default connect(mapStateToProps)(CreateStaff);
