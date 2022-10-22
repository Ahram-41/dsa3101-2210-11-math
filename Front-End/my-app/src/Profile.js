import React from "react";
import "./Profile.css";
import Card from './Components/Cards'
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function Profile (){
    return (
        <>
        <Navbar />
        <div>
        <Card 
        title='ST3131'
        imageUrl='https://www.stat.nus.edu.sg/wp-content/uploads/sites/8/2020/04/08235J.gif'
        body='Regression Analysis'
        />


        </div>

        </>

    );  
}

export default Profile;