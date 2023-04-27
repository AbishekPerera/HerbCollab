import React, { useEffect, useState } from 'react';
import './styles/Dashboard.css';
import Sidebar from '../../../components/System/Sidebar/Sidebar';
import SystemNav from '../../../components/System/SystemNavBar/SystemNav';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import './styles/PendingOrders.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  const getPendingOrders = () => {
    const status = 'Pending';
    axios
      .get('http://localhost:8072/orders/getorderbystatus/' + status)
      .then((res) => {
        setPendingOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getPendingOrders();
  }, []);

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
          <h1 style={{ textAlign: 'center' }}>Pending Orders</h1>
          <br />

          <div className='pendingItemDiv'>
            <div class='row'>
              {pendingOrders.map((pendingOrder) => (
                <div class='col-6 col-md-4'>
                  <ul class='cards'>
                    <Link
                      to={'/system/admin-pendingorders/' + pendingOrder._id}>
                      <a href='#' class='card'>
                        <img
                          src={pendingOrder.productImage}
                          class='card__image'
                          alt=''
                          style={{ height: '320px', width: '320px' }}
                        />
                        <div class='card__overlay'>
                          <div class='card__header'>
                            <svg
                              class='card__arc'
                              xmlns='http://www.w3.org/2000/svg'>
                              <path />
                            </svg>

                            <div class='card__header-text'>
                              <h2 class='card__title'>
                                {pendingOrder.productName}
                              </h2>
                            </div>
                          </div>
                          <h5 class='card__description'>
                            Quantity - {pendingOrder.quantity}
                            <br />
                            Seller - {pendingOrder.sellerName}
                          </h5>
                        </div>
                      </a>
                    </Link>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default PendingOrders;
