import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Checkout from './routes/Checkout/Checkout'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
