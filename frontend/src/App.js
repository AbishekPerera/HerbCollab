import React from "react";
import { Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import Test from "./pages/Test";
import Dashboard from "./pages/System/Admin/Dashboard";
import SellerDashboard from "./pages/System/Seller/SellerDashboard";
import PendingOrders from "./pages/System/Admin/PendingOrders";
import PendingItem from "./pages/System/Admin/PendingItem";
import AllProducts from "./pages/System/Admin/AllProducts";

function App() {
  return (
    <div className="App">
      {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/just" element={<Test />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/admin-dashboard" element={<Dashboard />} />
        <Route path="/system/admin-pendingorders" element={<PendingOrders />} />
        <Route path="/system/admin-pendingitem" element={<PendingItem />} />
        <Route path="/system/admin-allproducts" element={<AllProducts />} />

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/seller-dashboard" element={<SellerDashboard />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      </Routes>
    </div>
  );
}

export default App;
