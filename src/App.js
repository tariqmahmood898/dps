import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/GlobalStyles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Staking from './components/Staking'; 
import Swapping from './components/Swapping';
import Ston from './components/Ston';
import Tokenomics from './components/Tokenomics';
import About from './components/About';
import Login from './components/Login';
import Footer from "./components/Footer"; 


function App() {
  return (
 


    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/swapping" element={<Swapping />} />
          <Route path="/Ston" element={<Ston />} />
          <Route path="/Tokenomics" element={<Tokenomics />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
         <Footer /> 
      </div>
    </Router>
  );
}

export default App;
