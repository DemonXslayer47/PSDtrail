import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VehicleList from './components/VehicleList';
import VehicleDetails from './components/VehicleDetails';
import Login from './components/Login';
import SignUp from './components/signup';
import Dashboard from './pages/Dashboard';
import Car from './pages/Car';
import Bike from './pages/Bike';
import YourOrders from './pages/YourOrders';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vehicle" element={<VehicleList />} />
            <Route path="/vehicle/:type" element={<VehicleDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/car" element={<Car />} />
            <Route path="/bike" element={<Bike />} />
            <Route path="/your-orders" element={<YourOrders />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
