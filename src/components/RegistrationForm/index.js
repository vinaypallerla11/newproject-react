import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Import your CSS file

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("")
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false); // State to track success
  const navigate = useNavigate();

  const LoginForm = () => {
    navigate('/');
  }

  const formSubmit = async (e) => {
    e.preventDefault();

    const userDetails = { username, password, gender, email, location };

    if ((username.trim() === '') || (password.trim() === '') || (email.trim() === '') || (gender.trim() === '') || (location.trim() === '')) {
      setErrorMessage(`Please fill in the following fields`);
      return;
    }

    const url = 'http://localhost:5000/registers/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    console.log(response);
    console.log(data);

    // If successful registration
    if (response.ok) {
      alert('Registration successful'); // Alert for successful registration
      setSuccess(true); // Set success state to true
      setUserName('');
      setPassword('');
      setGender('');
      setEmail('');
      setLocation('')
      setErrorMessage('');
    } else {
      // Handle error response here
      setSuccess(false); // Reset success state
      setErrorMessage('Registration failed');
    }
  };

  return (
    <div className="container">
      <div className="app-container">
        <h1 className='heading'>Register here...</h1>
        <form onSubmit={formSubmit} className={`form-content ${success ? 'success' : ''}`}>
          <label htmlFor="username" className="input-label">Username:</label> <br />
          <input type="text" className="input-change" id="username" name='username' placeholder='Username' value={username} onChange={(e) => setUserName(e.target.value)} /> <br />
          <label htmlFor="password" className="input-label">Password:</label> <br />
          <input type="text" className="input-change" id="password" name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
          <label htmlFor="email" className="input-label" >Email:</label> <br />
          <input type="text" className="input-change" id="email" name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
          <label htmlFor="gender" className="input-label">Gender:</label> <br />
          <input type="text" className="input-change" id="gender" name='gender' placeholder='Gender' value={gender} onChange={(e) => setGender(e.target.value)} /> <br />
          <label htmlFor="location" className="input-label">Location:</label> <br />
          <input type="text" className="input-change" id="location" name='location' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
          
          <div className='button-content'>
            <button type="submit" className="register-btn">Register</button>
            <button className="login-btn" onClick={LoginForm}>Login</button>
          </div>
          {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
