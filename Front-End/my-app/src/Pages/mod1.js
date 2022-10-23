import React from 'react';
import Navbar from '../Components/Navbar.js';
import Select from 'react-select';
import "./mod1.css";
import { Link } from 'react-router-dom';


function Mod1() {
  const tobegraded = [
    { value: 'Assignment 3', label: 'Assignment 3' },
    { value: 'Mid-term exams', label: 'Mid-term exams' },
    { value: 'Assignment 4', label: 'Assignment 4' }
  ];
  const graded = [
    { value: 'Assignment 1', label: 'Assignment 1' },
    { value: 'Assignment 2', label: 'Assignment 2' }
  ];
  const Spacer = require('react-spacer');
  return (
    <>
    <Navbar />
    <div className='mod1'>
      <h2>Select the assignment to mark!</h2>
    </div>
    <h3>To be graded:</h3>
    <Select className="padded" options = {tobegraded} />
    <Spacer size={40} />
    <h3>Graded:</h3>
    <Select className="padded" options = {graded} />
    <Link style={{color: 'black'}} to ={'/Main'}>
    <div className="btn">
      <button onclick= {'/Main'}>
        <a>Next Page</a>
      </button>
    </div>
    </Link>
    </>
  );
}

export default Mod1;