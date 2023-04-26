import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';
import './styles/AllUsersSearch.css';
import SystemNav from '../../../components/System/SystemNavBar/SystemNav';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import Sidebar from '../../../components/System/Sidebar/Sidebar';
import { tableCustomStyles } from './styles/tableStyle.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import DataTable from 'react-data-table-component';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = () => {
    axios
      .get('http://localhost:8075/auth/')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const columns = [
    {
      name: 'Customer Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Contact Number',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Date joined',
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <Sidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <SystemNav />
        </div>
        <div className='content'>
          <br />
          <h1 style={{ textAlign: 'center' }}>All Customers</h1>
          <br />
          <br />
          <DataTable
            customStyles={tableCustomStyles}
            columns={columns}
            data={users}
            pagination={true}
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            noDataComponent='No Products Found'
          />
        </div>

        <SystemFooter />
      </div>
    </div>
  );
};
export default AllUsers;
