import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../Services/ApiService'; // Import your API service

function VehicleDetails() {
  const { type } = useParams();
  const [selectedVehicle, setSelectedVehicle] = useState(type);
  const [parts, setParts] = useState([]);

  useEffect(() => {
    // Fetch parts data based on selected vehicle type using ApiService
    ApiService.fetchParts(selectedVehicle)
      .then((data) => setParts(data))
      .catch((error) => console.error(error));
  }, [selectedVehicle]);

  return (
    <div>
      <h2>{selectedVehicle} Parts</h2>
      <ul>
        {parts.map((part) => (
          <li key={part}>{part}</li>
        ))}
      </ul>
      {/* Add functionality to add parts to the cart */}
    </div>
  );
}

export default VehicleDetails;
