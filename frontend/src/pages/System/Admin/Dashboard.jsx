import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import "./styles/Dashboard.css";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import DashInfoCard from "../../../components/System/DashInfoCard/DashInfoCard";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import axios from 'axios';

const Dashboard = () => {

  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SystemNav />
        </div>
        <div className="content">
          <DashInfoCard />
          <br />
          <div className="chartContainer">
            
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

          </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default Dashboard;
