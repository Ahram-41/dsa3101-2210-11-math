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
import EdiText from 'react-editext';

function Annotate() {
    const [document, setDocument] = useState("document.pdf");
    const [text,setText] = useState("Marks:")
    const question = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
      ];
    const [value,setValue] = useState('Input marks here');
    const handleSave = (val) => {
        console.log('Edited value -> ', val);
        setValue(val);
    };
    return (
    <>
    <Navbar />
    <br >
    </br>
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
          style={{width : '100px', paddingLeft:'280px',}} 
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
    <hr  style={{
    color: 'grey',
    backgroundColor: 'grey',
    height: .5,
    borderColor : 'grey'
    }}/>
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
                onClick={() => {setDocument("document.pdf");setText("Marks for Question 1:")}}>
                    Question 1
                </button>
                <button className="version-button"
                onClick={() => {setDocument("another-example.pdf");setText("Marks for Question 2:")}}>
                    Question 2
                </button>
            </div>
            <div className='rowC'>
                <p style={{paddingLeft:'600px',paddingRight:'30px',
                           paddingTop:'12px'}}>
                    {text}
                </p>
                <EdiText type="text" 
                style={{paddingLeft:'100px'}}
                value={value} onSave={handleSave} />
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
<<<<<<< HEAD

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
=======
 <div className='child-two'>
 <br/>

 <h2>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Errors
    <br />
    </h2>
    <hr  style={{
    color: 'grey',
    backgroundColor: 'grey',
    height: .3,
    borderColor : 'grey'
    }}/>
     <Stack spacing={27}>
    <br/>
    <br/>
    <p style={{border: '1px solid rgba(0, 0, 0, 5)'}} >
    Line 4: Wrong Evaluation
    </p>

   
</Stack>
    </div>  
    </div>
    </>
>>>>>>> 3742e050008416bf05563674e86ac03e3035c59c
  );
}
  
  export default Annotate;