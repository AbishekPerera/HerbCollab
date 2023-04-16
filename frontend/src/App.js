import React from "react";
import { Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import Test from "./pages/Test";
import Dashboard from "./pages/System/Admin/Dashboard";
import PendingProducts from "./pages/System/Admin/PendingProducts";
import AdminProfile from "./pages/System/Admin/AdminProfile";
import AllUsers from "./pages/System/Admin/AllUsers";


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
        <Route path="/system/admin-profile" element={<AdminProfile />} />
        <Route path="/system/admin-allusers" element={<AllUsers />} />
        <Route path="/system/admin-pendingproducts" element={<PendingProducts />}
        />
        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/seller-dashboard" element={<Test />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      </Routes>
    </div>
  );
}

export default App;
