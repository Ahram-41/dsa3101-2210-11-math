import React, { Component } from 'react'
import Navbar from '../Components/Navbar.js';
import Select from 'react-select';
import "./mod1.css";
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';



function Mod3() {
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
  const data= [
    {assignment: "Assignment 1", marked: "26/07/2022", lastedited: "03/08/2022"},
    {assignment: "Assignment 2", marked: "03/08/2022", lastedited: "21/08/2022"}
  ];
  return (
    <>
    <Navbar />
    <p style={{backgroundColor: "darkorange", fontSize: 18, border:50}} className="mod1">Select the DSA3101 assignment you want to mark.</p>
    <div>
    <h3 className="padded">To be graded:</h3>
    </div>
    <Select className="padded" options = {tobegraded} />
    <Link style={{color: 'black'}} to ={'/Main'}>
    <div className="button">
      <button style={{Color: 'white'}} onclick= {'/Main'}>
        <a>Confirm</a>
      </button>
    </div>
    </Link>
    <h3 className="padded">Graded assignments:</h3>
    <div className="mod1">
      <table>
          <tr>
            <th>Assignment</th>
            <th>Marked date</th>
            <th>Last edited</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.assignment}</td>
                <td>{val.marked}</td>
                <td>{val.lastedited}</td>
              </tr>
            )
          })}
      </table>
    </div>
    </>
  );
}

export default Mod3;