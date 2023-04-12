import React from "react";
import { Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import Test from "./pages/Test";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SystemLogin from "./pages/SystemLoginPage/system-Login";

function App() {
  return (
    <div className="App">
      <Header />

      {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/just" element={<Test />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Customer Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/admin-dashboard" element={<Test />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Admin Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        <Route path="/system/auth" element={<Test />} />
        <Route path="/system/seller-dashboard" element={<Test />} />
        <Route path="/system/system-login" element={<SystemLogin />} />
        {/* ::::::::::::::::::::::::::::::::::::::::Seller Routes::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
