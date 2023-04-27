import React, { useEffect, useState } from 'react';
import './styles/SellerDashboard.css';
import SystemFooter from '../../../components/System/SystemFooter/SystemFooter';
import SellerSidebar from '../../../components/System/Sidebar/SellerSidebar';
import SellerNav from '../../../components/System/SystemNavBar/SellerNav';
import SellerInfoCard from '../../../components/System/DashInfoCard/SellerInfoCard';
import { Pie, PieChart, Cell, Legend } from 'recharts';
import axios from 'axios';

const SellerDashboard = () => {
  const [sellerOrders, setSellerOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState([0]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);
  const [dispatchedOrders, setDispatchedOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [rejectedOrders, setRejectedOrders] = useState([]);

  // Pie Chart

  const [piedata, setpiedata] = useState([
    { name: 'Group A', value: 0 },
    { name: 'Group B', value: 0 },
    { name: 'Group C', value: 0 },
    { name: 'Group D', value: 0 },
    { name: 'Group E', value: 0 },
  ]);

  const countOrderStatusWise = () => {
    const sellerInfo = JSON.parse(localStorage.getItem('systemInfo'));
    const getSellerId = sellerInfo['user']['_id'];
    axios
      .get(`http://localhost:8072/orders/getallorders`)
      .then((res) => {
        const filteredSellerOrders = res.data.filter((order) => {
          return order.sellerId === getSellerId;
        });
        setSellerOrders(filteredSellerOrders);

        //Count Total Orders
        let totalOrders = 0;
        filteredSellerOrders.forEach((order) => {
          totalOrders++;
        });

        setTotalOrders(totalOrders);

        // Count Pending Orders
        const pendingOrders2 = filteredSellerOrders.filter((order) => {
          return order.status === 'Pending';
        });

        let totalPendingOrders = 0;
        pendingOrders2.forEach((order) => {
          totalPendingOrders++;
        });

        setPendingOrders(totalPendingOrders);

        // Count Confirmed Orders
        const confirmedOrders2 = filteredSellerOrders.filter((order) => {
          return order.status === 'Confirmed';
        });

        let totalConfirmedOrders = 0;
        confirmedOrders2.forEach((order) => {
          totalConfirmedOrders++;
        });

        setConfirmedOrders(totalConfirmedOrders);

        // Count Dispatched Orders
        const dispatchedOrders2 = filteredSellerOrders.filter((order) => {
          return order.status === 'Dispatched';
        });

        let totalDispatchedOrders = 0;
        dispatchedOrders2.forEach((order) => {
          totalDispatchedOrders++;
        });

        setDispatchedOrders(totalDispatchedOrders);

        // Count Delivered Orders
        const deliveredOrders2 = filteredSellerOrders.filter((order) => {
          return order.status === 'Delivered';
        });

        let totalDeliveredOrders = 0;
        deliveredOrders2.forEach((order) => {
          totalDeliveredOrders++;
        });

        setDeliveredOrders(totalDeliveredOrders);

        // Count Rejected Orders
        const rejectedOrders2 = filteredSellerOrders.filter((order) => {
          return order.status === 'Rejected';
        });

        let totalRejectedOrders = 0;
        rejectedOrders2.forEach((order) => {
          totalRejectedOrders++;
        });

        setRejectedOrders(totalRejectedOrders);

        setpiedata([
          { name: 'Pending Orders', value: pendingOrders },
          { name: 'Confirmed Orders', value: confirmedOrders },
          { name: 'Dispatched Orders', value: dispatchedOrders },
          { name: 'Delivered Orders', value: deliveredOrders },
          { name: 'Rejected Orders', value: rejectedOrders },
        ]);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    countOrderStatusWise();
  }, [piedata]);

  const COLORS = ['#8f79d7', '#febf44', '#ec6074', '#00c2cc', '#00b33c'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
          <SellerInfoCard />
          <br />
          <div
            className='containerPieChart'
            style={{ display: 'flex', justifyContent: 'center' }}>
            <PieChart width={600} height={400}>
              <Legend
                layout='vertical'
                verticalAlign='top'
                align='right'
                iconSize={20}
                iconType='wye'
              />
              <Pie
                data={piedata}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={180}
                fill='#8884d8'
                dataKey='value'>
                {piedata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default SellerDashboard;
