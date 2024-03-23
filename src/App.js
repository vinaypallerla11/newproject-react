import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm';
import Home from './components/Home';


const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />}/>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
