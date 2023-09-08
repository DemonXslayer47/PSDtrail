// Dashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic (e.g., clear user session) and then redirect to the main page
    // For simplicity, we'll just redirect to the main page
    navigate('/');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/car">Car</Link>
        </li>
        <li>
          <Link to="/bike">Bike</Link>
        </li>
        <li>
          <Link to="/your-orders">Your Orders</Link>
        </li>
        <li>
          <Link to="/order-history">Order History</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
