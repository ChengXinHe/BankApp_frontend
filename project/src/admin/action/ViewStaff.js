import React, { useState, useEffect } from 'react';
import axios from 'axios'

function ViewStaff() {
    const [staffData, setStaffData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);

    // 发起 GET 请求来获取员工数据
    const fetchStaffData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/api/v1/admin/staff/1'); // 替换为实际的后端 API 地址
            setStaffData(response.data.data);
        } catch (error) {
            console.error('Error fetching staff data:', error);
        }

    };

    const handleStatusChange = async (staffId) => {
        try {
            // 构建要发送的数据对象，包括员工ID和新的状态
            const dataToUpdate = {
                staffid: staffId,
                status: staffData.find(item => item.staffid === staffId).status
               
            };
            console.log(dataToUpdate.staffid);
            console.log(dataToUpdate.staffStatus);

            // 发送PUT请求来更新员工状态
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            
            const response = await axios.put('http://localhost:8081/api/v1/admin/staff', dataToUpdate);
            console.log(response);
            // 更新本地状态数据
            const updatedStaffData = staffData.map(item => {
                if (item.staffid === staffId) {
                    item.status = !item.status; // 反转状态
                }
                return item;
            });

            setStaffData(updatedStaffData);
        } catch (error) {
            console.error('Error changing staff status:', error);
        }
    };

    useEffect(() => {
        // 获取员工数据
        fetchStaffData();
    }, []);
    // // 计算当前页的数据
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = staffData.slice(indexOfFirstItem, indexOfLastItem);

    // // // 生成表格行的函数
    const renderTableRows = () => {
        return currentItems.map((item, index) => (
            <tr key={index}>
                <td>{item.staffid}</td>
                <td>{item.staffname}</td>
                <td>
                    <div class="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            checked={item.status}
                            id={`flexSwitchCheckDefault_${item.staffid}`}
                            onChange={() => handleStatusChange(item.staffid)} // 当复选框状态变化时触发处理函数
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`flexSwitchCheckDefault_${item.staffid}`}>
                            {item.status ? 'Enable' : 'Disable'}
                        </label>
                    </div>
                </td>
            </tr>
        ));
    };



    // // 计算总页数
    const totalPageCount = Math.ceil(staffData.length / itemsPerPage);

    // // 生成分页按钮的函数
    const renderPaginationButtons = () => {
        const pageButtons = [];
        for (let i = 1; i <= totalPageCount; i++) {
            pageButtons.push(
                <li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
                    <a className="page-link" href="#" onClick={() => setCurrentPage(i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return pageButtons;
    };

    return (
        <div className='stafftable '>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Staff Id</th>
                        <th>Staff Name</th>
                        <th>Enable/Disable</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
            <nav className="Page" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage - 1)}>
                            Previous
                        </a>
                    </li>
                    {renderPaginationButtons()}
                    <li className={`page-item ${currentPage === totalPageCount ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" onClick={() => setCurrentPage(currentPage + 1)}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ViewStaff