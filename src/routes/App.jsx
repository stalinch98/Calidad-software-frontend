import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Confirm from '../containers/Confirm';
import ForgotPassword from '../containers/ForgotPassword';
import Welcome from '../containers/Welcome';
import InputCode from '../containers/InputCode';
import NewPassword from '../containers/NewPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm/:code" element={<Confirm />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/welcome/:username" element={<Welcome />} />
        <Route path="/inputcode" element={<InputCode />} />
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
