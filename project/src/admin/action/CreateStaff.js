import React, { useState, useEffect } from 'react';

function CreateStaff() {
    const [formData, setFormData] = useState({
        staffname: '',
        staffusername: '',
        staffpassword: '',
        reenterPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 在这里处理提交逻辑，可以向后端发送请求来创建 staff
        // 你可以使用 formData 中的数据
        console.log(formData);
    };

    return (
        <div className='createStaff'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="staffname" className="form-label">
                        Staff Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="staffname"
                        name="staffname"
                        value={formData.staffname}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="staffusername" className="form-label">
                        Staff Username
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
                    <label htmlFor="staffpassword" className="form-label">
                        Staff Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="staffpassword"
                        name="staffpassword"
                        value={formData.staffpassword}
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


export default CreateStaff