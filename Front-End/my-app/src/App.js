import React, { useState } from "react";
//import ReactDOM from "react-dom";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";   
import Profile from "./Profile.js";
import Login from "./Login.jsx";
import Mod1 from './Pages/mod1';
import Mod2 from './Pages/mod2';
import Mod3 from './Pages/mod3';
import Mod4 from './Pages/mod4';
import Mod5 from './Pages/mod5';
import Mod6 from './Pages/mod6';
import Main from './Pages/Main';
import Annotate from './Pages/Annotate';
import Home from "./Home";

function App() {
    return (
        <div>
        <Router>
        
            <Routes>
                <Route exact path="/login" element={<Login />}  />
                <Route exact path="/profile" element={<Profile />} />
                <Route path='/mod1' element={<Mod1 />} />
                <Route path='/mod2' element={<Mod2 />} />
                <Route path='/mod3' element={<Mod3 />} />
                <Route path='/mod4' element={<Mod4 />} />
                <Route path='/mod5' element={<Mod5 />} />
                <Route path='/mod6' element={<Mod6 />} />
                <Route path='/Main' element={<Main />} />
                <Route path='/Annotate' element={<Annotate />} />
                <Route path='/testpdf' element={<testpdf/>} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;

