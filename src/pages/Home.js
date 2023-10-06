import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h2>Welcome to MechaZone</h2>
      <button onClick={handleSignUpClick}>Sign Up</button>
      {/* Image Grid */}
      <div className="image-grid">
        <div className="image-item">
          <img src="/images/carparts.jpg" alt="Car Part 1" />
          <p>Car Part 1</p>
        </div>
        <div className="image-item">
          <img src="/images/parts3.jpg" alt="Car Part 2" />
          <p>Car Part 2</p>
        </div>
        <div className="image-item">
          <img src="/images/parts2.jpg" alt="Bike Part 1" />
          <p>Bike Part 1</p>
        </div>
        <div className="image-item">
          <img src="/images/bike parts.jpg" alt="Bike Part 2" />
          <p>Bike Part 2</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
