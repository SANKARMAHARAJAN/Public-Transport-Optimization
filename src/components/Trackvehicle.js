import React, { useState } from 'react';

const Trackvehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [startingDestination, setStartingDestination] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [currentHumidity, setCurrentHumidity] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleTrackClick = () => {
    // Simulate fetching the location, destination, temperature, and humidity details (replace with actual data fetching logic)
    const fetchedLocation = 'Current Location: New York';
    const fetchedDestination = 'Starting Destination: Los Angeles';
    const fetchedTemperature = 'Current Temperature: 25°C';
    const fetchedHumidity = 'Current Humidity: 50%';

    setCurrentLocation(fetchedLocation);
    setStartingDestination(fetchedDestination);
    setCurrentTemperature(fetchedTemperature);
    setCurrentHumidity(fetchedHumidity);
    setShowDetails(true);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Tracking Location of Vehicle</h2>
      <div className="d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Vehicle Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleTrackClick}
        >
          Track
        </button>

        {showDetails && (
          <div className="mt-3">
            <p>{currentLocation}</p>
            <p>{startingDestination}</p>
            <p>{currentTemperature}</p>
            <p>{currentHumidity}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trackvehicle;
