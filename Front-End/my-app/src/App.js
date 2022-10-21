import React, { useState } from "react";
//import ReactDOM from "react-dom";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";   
import Profile from "./Profile.js";
import Login from "./Login.js";

function App() {
    return (
        <div>
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login />}  />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;

