import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/System/Sidebar/Sidebar';
import SystemNav from '../../../components/System/SystemNavBar/SystemNav';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import './styles/PendingItem.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const PendingItem = () => {
  const [pendingItem, setPendingItem] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPendingItem();
  }, []);

  const getPendingItem = () => {
    axios
      .get('http://localhost:8072/orders/getorderbyid/' + id)
      .then((res) => {
        setPendingItem(res.data.order);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getPendingItem();
  }, []);

  const changeStatusPending = () => {
    const status = 'Confirmed';
    axios
      .put('http://localhost:8072/orders/updateorderstatus/' + id, {
        status,
      })
      .then((res) => {
        swal('Order Confirmed!', 'Order Confirmed!', 'success');
        setTimeout(function () {
          navigate('/system/admin-pendingorders');
        }, 2000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //Change status to rejected

  const changeStatusToRejected = () => {
    const status = 'Rejected';
    axios
      .put('http://localhost:8072/orders/updateorderstatus/' + id, {
        status,
      })
      .then((res) => {
        swal('Order Rejected!', 'Order Rejected!', 'success');
        setTimeout(function () {
          navigate('/system/admin-pendingorders');
        }, 2000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
          <div className='pendingItemContainer0'>
            <div className='pendingItemContainer1'>
              <div className='row'>
                <div class='col-5'>
                  <div className='pendingItemImageContainer'>
                    <section class='mx-auto my-5' style={{ maxWidth: '23rem' }}>
                      <div class='card-body d-flex flex-row'>
                        <img
                          class='img-fluid'
                          src={pendingItem.productImage}
                          alt='Product'
                          style={{ height: '350px', width: '100%' }}
                        />
                      </div>
                    </section>
                  </div>
                </div>
                <div class='col-7'>
                  <div className='pendingItemContentContainer'>
                    <section class='mx-2 my-2'>
                      <div class='card-body d-flex flex-row'>
                        <div class='d-flex flex-column'>
                          <div class='p-2'>
                            <span className='pendingItemTopic'>
                              {pendingItem.productName}
                            </span>
                          </div>
                          <div class='p-2'>
                            <span className='pendingItemPrice'>
                              {pendingItem.productPrice}
                            </span>
                          </div>
                          <div class='pendingItemDesc p-2'>
                            <span className='pendingItemDescSpan'>
                              Price of one : {pendingItem.price}
                            </span>
                            <br />
                            <br />
                            <span className='pendingItemDescSpan'>
                              Total Price : {pendingItem.total}
                            </span>
                            <br />
                            <br />
                            <span className='pendingItemDescSpan'>
                              Seller name : {pendingItem.sellerName}
                            </span>
                            <br />
                            <br />
                            <span className='pendingItemDescSpan'>
                              Customer name : {pendingItem.username}
                            </span>
                            <br />
                            <br />
                            <span className='pendingItemDescSpan'>
                              Quantity Bought : {pendingItem.quantity}
                            </span>
                            <br />
                          </div>
                          {/* <div class='px-2 py-4'>
                            <span className='pendingItemQuantity'>
                              Quantity Bought : {pendingItem.quantity}
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className='buttonRow row'>
                <div class='p-1 d-flex justify-content-end'>
                  <div class='px-4 py-2'>
                    <Button variant='success' onClick={changeStatusPending}>
                      Approve
                    </Button>
                  </div>
                  <div class='p-2'>
                    <Button variant='danger' onClick={changeStatusToRejected}>
                      Reject
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default PendingItem;
