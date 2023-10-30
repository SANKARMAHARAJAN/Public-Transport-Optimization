import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  width: '100%', // Set the width of the buttons to 100% of their container
  marginBottom: '10px', // Add some margin at the bottom for spacing
};

const UserScreen = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Welcome to User Dashboard</h2>
        <Link to="/profile" className="btn btn-outline-primary">
          <i className="fas fa-user"></i> User
        </Link>
      </div>

      <div className="row mt-4"> {/* Add margin-top to the row */}
        <div className="col-md-6">
          <Link to="/trackvehicle" className="btn btn-primary" style={buttonStyle}>
            Track Location
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/route-planning" className="btn btn-primary" style={buttonStyle}>
            Route Planning
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/news-and-events" className="btn btn-primary" style={buttonStyle}>
            News and Events
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/faq" className="btn btn-primary" style={buttonStyle}>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserScreen;
