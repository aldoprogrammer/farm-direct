import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import RegisterFarmFlow from './pages/tabs/farms/RegisterFarmFlow';
import UserProfile from './pages/tabs/user-profile/UserProfile';
import Product from './pages/tabs/product/Product';
import Market from './pages/tabs/market/Market';




function App() {

 
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/market" />} />
        <Route path="/market" element={<Market />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* farm route */}
        <Route path="/farm" element={<RegisterFarmFlow />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path='/product' element={<Product />} />
        
      </Routes>
    </Router>
  )
}

export default App

