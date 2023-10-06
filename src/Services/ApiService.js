// ApiService.js - Implement API calls to your Flask backend here
const ApiService = {
    fetchParts: (vehicleType) => {
      // Implement the API call to fetch parts data for the selected vehicle type
      return fetch(`/api/parts?vehicleType=${vehicleType}`)
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
          throw error;
        });
    },
    // Add more API calls as needed
  };
  
  export default ApiService;
