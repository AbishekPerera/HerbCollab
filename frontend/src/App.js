import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import Test from "./pages/Test";
import SystemLogin from "./pages/SystemLoginPage/system-Login";
import Dashboard from "./pages/System/Admin/Dashboard";

import SellerDashboard from "./pages/System/Seller/SellerDashboard";

import PendingProducts from "./pages/System/Admin/PendingProducts";

import AdminProfile from "./pages/System/Admin/AdminProfile";
import AllUsers from "./pages/System/Admin/AllUsers";

import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";



function App() {
  return (
    <div className="App">
     
      {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/just" element={<Test />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/admin-dashboard" element={<Dashboard />} />
        <Route path="/system/admin-profile" element={<AdminProfile />} />
        <Route path="/system/admin-allusers" element={<AllUsers />} />
        <Route path="/system/admin-pendingproducts" element={<PendingProducts />} />
        
        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/system-login" element={<SystemLogin />} />
        <Route path="/system/seller-dashboard" element={<SellerDashboard />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      </Routes>

    </div>
  );
}

export default App;
