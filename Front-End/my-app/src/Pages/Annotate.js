import React, { Component } from 'react'
import Navbar from '../Components/Navbar.js';
import Select from 'react-select';
import "./mod1.css";
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import { useEffect, useRef } from 'react';
import { useState } from "react";
import PdfViewerComponent from "../Components/PdfViewerComponent.js";
import Tabs from "../Components/Tabs.js"
import "./Annotate.css"
import "./Annotate1.css"
import handwritten from './handwritten3.png'
import Box from '@mui/material/Box';
//npm install @mui/material @emotion/react @emotion/styled
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Annotate() {
    const [document, setDocument] = useState("document.pdf");
    const question = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
      ];

    return (
    <>
    <Navbar />
    <br />
    <div className='rowC'>
        <button className="student-button" style={{width:'500px'}}
        onClick={() => setDocument("another-example.pdf")}>
            {String.fromCharCode(8592)} Previous student
        </button>
        <div>
        <div className='rowC' >
            
            <form className='rowC   '>
                <p className='rowC'>
                    <p style={{paddingRight:'20px',paddingTop:'3px'}}>
                        Student Number: 
                    </p>
                    <input type="text" name="number"
                    style={{height:'2.9em'}}/>
                </p>
            </form>
            <p style={{paddingLeft:'20px', paddingRight:'20px', paddingTop:'10px'}}>
            Question:
            </p> 
            <Select className="filter" options = {question} 
            style={{height:'0.8em;',lineheight:'1.8em'}}/>
        </div>
        <button className='stunumgo'
          style={{width : '100px', paddingLeft:'280px'}} 
         type='submit'>
            Search
         </button>
    </div>
        <p style={{color:'white'}}>
            Hello
        </p>
        <button className="student-button" style={{width:'500px'}}
        onClick={() => setDocument("another-example.pdf")}>
            Next student {String.fromCharCode(8594)}
        </button>
    </div>
    <div className="parent">
     <div className="child-one" >  
    <Tabs>
        <div label="Question">
            {/* <button className="discreet-button"
            onClick={() => setDocument("document.pdf")}>
               Refresh page
            </button> */}
            <div className='rowC'>
                <button className="version-button"
                onClick={() => setDocument("document.pdf")}>
                    Question 1
                </button>
                <button className="version-button"
                onClick={() => setDocument("another-example.pdf")}>
                    Question 2
                </button>
            </div>
            <div className="Ann-viewer">
                <PdfViewerComponent document={document} />
            </div>      
        </div>
        
        <div label="See original version">
        
            <div className="orig">
                <img  src={handwritten} style={{width:'35%' ,height:'auto'}}/>
            </div>
        </div>
    </Tabs>
    </div>
 <div className='child-two'>
 <br/>
 <Stack spacing={27}>
 <h2>
    &nbsp;&nbsp;&nbsp;&nbsp; Errors
    </h2>
    <br/>
    <br/>
    <p style={{border: '1px solid rgba(0, 0, 0, 5)'}} >
    Line 4: Wrong Evaluation
    </p>
</Stack>
    </div>  
    </div>
    </>
  );
}
  
  export default Annotate;