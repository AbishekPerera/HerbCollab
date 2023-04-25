import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MyCart from "./pages/MyCart/MyCart";
import PaymentGateway from "./pages/PaymentGateway/PaymentGateway";
import CachOnDelivery from "./pages/CachOnDelivery/CachOnDelivery";
// import MyProfile from "./pages/MyProfile/MyProfile";
import CustomerLogin from "./pages/CustomerAuth/CustomerLogin";
import CustomerRegister from "./pages/CustomerAuth/CustomerRegister";
import CustomerProfile from "./pages/CustomerAuth/CustomerProfile";
import SystemLogin from "./pages/SystemLoginPage/system-Login";
import MyOrders from "./pages/MyProfile/MyOrders";
// import SellerProfile from "./pages/System/Seller/NewSellerProfile";
// :::::::::::::::::::::::::::::::::::::::::::error in this line ::::::::::::::::::::::::::::::::::::::::::::::

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
        {/* <Route path="/myaccount" element={<MyProfile />} /> */}
        <Route path="/customerlogin" element={<CustomerLogin />} />
        <Route path="/customer/register" element={<CustomerRegister />} />
        <Route path="/myaccount" element={<CustomerProfile />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/cachondelivery" element={<CachOnDelivery />} />
        <Route path="/myaccount/myorders" element={<MyOrders />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<SystemLogin />} />
        {/* <Route path="/system/admin-dashboard" element={<Dashboard />} /> */}

        {/* <Route path="/system/admin-pendingorders" element={<PendingOrders />} /> */}
        {/* <Route path="/system/admin-pendingitem" element={<PendingItem />} /> */}
        {/* <Route path="/system/admin-allproducts" element={<AllProducts />} /> */}

        {/* <Route path="/system/admin-profile" element={<AdminProfile />} /> */}
        {/* <Route path="/system/admin-allusers" element={<AllUsers />} /> */}
        {/* <Route path="/system/admin-tracking" element={<DeliveryTracking />} /> */}

        {/* <Route path="/system/admin-pendingproducts" element={<PendingProducts />} />

        {/* <Route
          path="/system/admin-pendingproducts"
          element={<PendingOrders />}
        /> */}

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* <Route path="/system/auth" element={<Test />} /> */}
        {/* <Route path="/system/seller-dashboard" element={<SellerDashboard />} /> */}

        {/* <Route
          path="/system/system-login/seller-profile"
          element={<SellerProfile />}
        /> */}
        {/* <Route path="/system/seller-allorders" element={<AllOrders />} /> */}

        {/* <Route path="/system/seller-products" element={<SellerProducts />} /> */}
        {/* <Route path="/system/system-login" element={<SystemLogin />} /> */}
        {/* <Route
          path="/system/seller-products/update/:id"
          exact
          element={<UpdateProduct />}
        /> */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      </Routes>
    </div>
  );
}

export default App;
