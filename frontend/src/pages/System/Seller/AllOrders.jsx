import React, { useEffect, useState } from 'react';
import './styles/SellerDashboard.css';
import './styles/AllOrders.css';
import './styles/AllOrdersSearch.css';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import SellerSidebar from '../../../components/System/Sidebar/SellerSidebar';
import SellerNav from '../../../components/System/SystemNavBar/SellerNav';
import { tableCustomStyles } from '../Admin/styles/tableStyle.jsx';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const AllOrders = () => {
  const [sellerOrders, setSellerOrders] = useState([]);
  const sellerInfo = JSON.parse(localStorage.getItem('systemInfo'));
  const getSellerName = sellerInfo['user']['UserName'];

  const getAllSellerOrders = () => {
    const sellerInfo = JSON.parse(localStorage.getItem('systemInfo'));
    const getSellerId = sellerInfo['user']['_id'];
    axios
      .get(`http://localhost:8072/orders/getallorders`)
      .then((res) => {
        const filteredSellerOrders = res.data.filter((order) => {
          return order.sellerId === getSellerId;
        });
        setSellerOrders(filteredSellerOrders);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getAllSellerOrders();
  }, []);

  const columns = [
    {
      name: 'Product',

      selector: (row) => (
        <img
          className='cart-product-img'
          src={row.productImage}
          alt={row.name}
          style={{ height: '120px', width: '120px' }}
        />
      ),
    },
    {
      name: 'Product Name',
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: 'Total',
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: (row) => row.quantity,
      sortable: true,
    },

    {
      name: 'Customer Name',
      selector: (row) => row.deliveryname,
      sortable: true,
    },
    {
      name: 'Order Status',
      selector: (row) => 'status',
      sortable: true,
      sortFunction: (rowA, rowB) => {
        // Define the order in which the status labels should be sorted
        const statusOrder = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];

        // Get the indices of the status labels in the order array
        const indexA = statusOrder.indexOf(rowA.status);
        const indexB = statusOrder.indexOf(rowB.status);

        // Return the comparison result based on the indices
        return indexA - indexB;
      },
      cell: (row) => {
        // Render the status label with the appropriate color class
        let colorClass;
        if (row.status === 'Pending') {
          colorClass = 'bg-secondary font-size-14';
        } else if (row.status === 'Confirmed') {
          colorClass = 'bg-warning font-size-14';
        } else if (row.status === 'Dispatched') {
          colorClass = 'bg-danger font-size-14';
        } else if (row.status === 'Delivered') {
          colorClass = 'bg-primary font-size-14';
        } else {
          colorClass = 'bg-dark font-size-14';
        }
        return <span className={`badge ${colorClass}`}>{row.status}</span>;
      },
    },
  ];

  return (
    <div className='mainContainer'>
      <div className='sidebar'>
        <SellerSidebar />
      </div>

      <div className='contentContainer'>
        <div className='systemNavBar'>
          <SellerNav />
        </div>
        <div className='content'>
          <br />
          <h1 style={{ textAlign: 'center' }}>All Orders of {getSellerName}</h1>
          <br />
          <br />
          <DataTable
            customStyles={tableCustomStyles}
            columns={columns}
            data={sellerOrders}
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
export default AllOrders;
