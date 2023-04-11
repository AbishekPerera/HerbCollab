import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./Dashboard.css";
import Footer from "../../../components/Footer/Footer";
import SystemNav from "../../../components/SystemNavBar/SystemNav";
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
