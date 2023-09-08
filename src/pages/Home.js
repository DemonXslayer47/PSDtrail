import React from 'react';
//import { Link, useHistory } from 'react-router-dom';
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
      {/* ... Other content */}
    </div>
  );
}

export default Home;
