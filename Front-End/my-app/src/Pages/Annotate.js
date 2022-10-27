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
import typewritten from './handwritten.png'

function Annotate() {
    const [document, setDocument] = useState("document.pdf");

    return (
    <>
    <Navbar />
    <div className='rowC'>
        <button className="student-button"
        onClick={() => setDocument("another-example.pdf")}>
            Previous student
        </button>
        <button className="student-button"
        onClick={() => setDocument("another-example.pdf")}>
            Next student
        </button>
    </div>
    <Tabs>
        <div label="Question 1">
            <button className="discreet-button"
            onClick={() => setDocument("document.pdf")}>
                <text style={{color:'black'}}>Refresh page</text>
            </button>
            <div className="Ann-viewer">
                <PdfViewerComponent document={document} />
            </div>      
        </div>
        <div label="Question 2">
            <div className="Ann-viewer">
                <button className="discreet-button"
                onClick={() => setDocument("another-example.pdf")}>
                    <text style={{color:'black'}}>Refresh page</text>
                </button>
                <PdfViewerComponent document={document} />
            </div>
        </div>
        <div label="See original version">
        <nav className="nav">
          <div className="container">
            <img  src={typewritten}/>
          </div>
        </nav>
        </div>
    </Tabs>
    </>
  );
}
  
  export default Annotate;