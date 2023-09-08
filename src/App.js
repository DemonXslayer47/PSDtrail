// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './pages/signup'; // Changed the import here
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Car from './pages/Car';
import Bike from './pages/Bike';
import YourOrders from './pages/YourOrders';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer'; // Added the import here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="car" element={<Car />} />
              <Route path="bike" element={<Bike />} />
              <Route path="your-orders" element={<YourOrders />} />
              <Route path="order-history" element={<OrderHistory />} />
            </Route>
          </Routes>
        </div>
        <Footer /> {/* Added the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
