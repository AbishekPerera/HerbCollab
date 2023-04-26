import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';
import './styles/DeliveryTracking.css';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import Sidebar from '../../../components/System/Sidebar/Sidebar';
import SystemNav from '../../../components/System/SystemNavBar/SystemNav';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from './styles/tableStyle.jsx';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const DeliveryTracking = () => {
  const [trackingOrders, setTrackingOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => getAllTrackingOrders(), []);

  const getAllTrackingOrders = () => {
    axios
      .get('http://localhost:8072/orders/getallorders')
      .then((res) => {
        const filteredOrders = res.data.filter((trackingOrders) => {
          return (
            trackingOrders.status === 'Dispatched' ||
            trackingOrders.status === 'Delivered' ||
            trackingOrders.status === 'Confirmed'
          );
        });
        setTrackingOrders(filteredOrders);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const changeStatusToDelivered = (id) => {
    const status = 'Delivered';
    axios
      .put('http://localhost:8072/orders/updateorderstatus/' + id, { status })
      .then((res) => {
        swal('Order Delivered!', 'Order Delivered!', 'success');
        setTimeout(function () {
          // navigate('/system/admin-tracking');
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const changeStatusToDispatched = (id) => {
    const status = 'Dispatched';
    axios
      .put('http://localhost:8072/orders/updateorderstatus/' + id, { status })
      .then((res) => {
        swal('Order Dispatched!', 'Order Dispatched!', 'success');
        setTimeout(function () {
          // navigate('/system/admin-tracking');
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const columns = [
    {
      name: 'Order',

      selector: (row) => (
        <img
          className='cart-product-img'
          src={row.productImage}
          alt={row.productName}
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
      name: 'Quantity',
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: 'Total Price',
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: 'Order Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Update Status',
      selector: (row) => (
        <>
          {row.status === 'Dispatched' ? (
            <span style={{ fontWeight: 'bold', color: 'green' }}>
              Order Completed
            </span>
          ) : (
            <>
              {row.status === 'Delivered' ? (
                <button
                  className='button-18'
                  onClick={() => changeStatusToDispatched(row._id)}>
                  Dispatched
                </button>
              ) : (
                <>
                  {row.status === 'Confirmed' ? (
                    <button
                      style={{ backgroundColor: 'orange', width: '120px' }}
                      className='button-18'
                      onClick={() => changeStatusToDelivered(row._id)}>
                      Delivered
                    </button>
                  ) : (
                    ''
                  )}
                </>
              )}
            </>
          )}
        </>
      ),
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
          <h1 style={{ textAlign: 'center' }}>Delivery Status</h1>
          <br />
          <br />
          <DataTable
            customStyles={tableCustomStyles}
            columns={columns}
            data={trackingOrders}
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
export default DeliveryTracking;
