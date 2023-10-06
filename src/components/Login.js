import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../CSS/LoginandSignup.css';

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState(''); // Use emailOrPhone state
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, we'll just navigate to a different page on login success
    if ((emailOrPhone === 'demo@example.com' || emailOrPhone === '1234567890') && password === 'password') {
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      setError('Invalid login credentials');
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-signup-box">
      <img src="/images/login.png" alt="Login" className="login-image" />
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form>
          <div>
            <label htmlFor="emailOrPhone">Email or Phone:</label> {/* Updated label */}
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
