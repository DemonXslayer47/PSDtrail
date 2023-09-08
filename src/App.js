// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/signup'; // Import the SignUp component
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Import the Dashboard component
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> {/* Add the Login route */}
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Create a Dashboard route */}
          <Route path="/payment" element={<Payment />} />
          {/* Add more routes for different pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
