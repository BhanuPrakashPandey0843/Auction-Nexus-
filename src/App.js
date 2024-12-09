// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/LandingPage'; // Landing page component
import LoginPage from './Pages/LoginPage'
import Header from './Components/Navbar/Navbar'; // Header component
import Footer from './Components/Footer/Footer'; // Footer component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;