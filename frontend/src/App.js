import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import Test from "./pages/Test";
import Dashboard from "./pages/System/Admin/Dashboard";
import SystemLogin from "./pages/SystemLoginPage/system-Login";
import SellerDashboard from "./pages/System/Seller/SellerDashboard";
import AdminProfile from "./pages/System/Admin/AdminProfile";
import AllUsers from "./pages/System/Admin/AllUsers";

import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MyCart from "./pages/MyCart/MyCart";
import MyProfile from "./pages/MyProfile/MyProfile";
import SellerProducts from "./pages/System/Seller/SellerProducts";



function App() {
  return (
    <div className="App">
      {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/myaccount" element={<MyProfile />} />
        <Route path="/just" element={<Test />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/admin-dashboard" element={<Dashboard />} />

        <Route path="/system/admin-profile" element={<AdminProfile />} />
        <Route path="/system/admin-allusers" element={<AllUsers />} />
        
        
        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/system/seller-products" element={<SellerProducts />} />
        <Route path="/system/system-login" element={<SystemLogin />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      </Routes>
    </div>
  );
}

export default App;
