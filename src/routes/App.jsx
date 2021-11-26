import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Confirm from '../containers/Confirm';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/confirm" element={<Confirm />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;