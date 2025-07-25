import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GuidePage from "@/pages/GuidePage";

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<GuidePage />} />
          <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1><p className="text-xl text-gray-600">Learn more about AutoTester and our mission to simplify automated testing.</p></div></div>} />
          <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1><p className="text-xl text-gray-600">Get in touch with our team for support and questions.</p></div></div>} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  );
}

export default App;