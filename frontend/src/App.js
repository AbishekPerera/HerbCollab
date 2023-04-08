import React from "react";
import { Routes, Route } from "react-router-dom";
import Sample from "./pages/Sample";
import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sample />} />
        <Route path="/just" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
