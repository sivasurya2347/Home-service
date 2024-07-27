import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import UserSignUp from './components/UserSignUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        {/* <Route path="/sign-up" element={<SigningUp/>}/> */}
        <Route path="/sign-up" element={<UserSignUp/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);