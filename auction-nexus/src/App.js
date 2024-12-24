// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/LandingPage'; 
import LoginPage from './Pages/LoginPage';
import Header from './Components/Navbar/Navbar'; 
import Footer from './Components/Footer/Footer'; 
import RegisterPage from './Pages/RegisterPage'; 
import ContactPage from './Pages/ContactPage';
import ChatbotPage from './Pages/ChatbotPage';

import AdminPanel from "./Pages/AdminPanel"; 
import SellerPanel from "./Pages/SellerPanel"; 
import UserPanel from "./Pages/UserPanel"; 

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chat" element={<ChatbotPage />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/seller" element={<SellerPanel />} />
            <Route path="/user" element={<UserPanel />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;