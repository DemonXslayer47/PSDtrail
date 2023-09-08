import React from 'react';
import { Link } from 'react-router-dom';

function VehicleList() {
  return (
    <div>
      <h2>Select a vehicle type:</h2>
      <ul>
        <li>
          <Link to="/vehicle/Car">Car</Link>
        </li>
        <li>
          <Link to="/vehicle/Bike">Bike</Link>
        </li>
        {/* Add more vehicle types */}
      </ul>
    </div>
  );
}

export default VehicleList;
