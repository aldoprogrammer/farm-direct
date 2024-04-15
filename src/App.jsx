import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import RegisterFarmFlow from './pages/tabs/RegisterFarmFlow';


function App() {

 
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/farm-welcome" element={<RegisterFarmFlow />} />
      </Routes>
    </Router>
  )
}

export default App

