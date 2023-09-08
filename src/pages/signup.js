// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Validate user inputs
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (!/^[A-Za-z]+$/.test(firstName) || !/^[A-Za-z]+$/.test(lastName)) {
      setError('First name and last name should contain only alphabets.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format. Use a valid email address.');
      return;
    }

    if (!/(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/.test(password)) {
      setError('Password must have 8 characters, one capital letter, one special symbol, and one numeric character.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!termsAccepted) {
      setError('You must accept the Terms and Conditions to sign up.');
      return;
    }

    // Registration successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label htmlFor="confirmPassword">Re-enter Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I agree to the Terms and Conditions
          </label>
        </div>
        <div>
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;
