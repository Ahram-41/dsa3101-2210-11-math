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
            {String.fromCharCode(8592)} Previous student
        </button>
        <button className="student-button"
        onClick={() => setDocument("another-example.pdf")}>
            Next student {String.fromCharCode(8594)}
        </button>
    </div>
    <Tabs>
        <div label="Question 1">
            <button className="discreet-button"
            onClick={() => setDocument("document.pdf")}>
               Refresh page
            </button>
            <div className='rowC'>
                <button className="version-button"
                onClick={() => setDocument("another-example.pdf")}>
                    See pdf version
                </button>
                <button className="version-button"
                onClick={() => setDocument("another-example.pdf")}>
                    See original version
                </button>
            </div>
            <div className="Ann-viewer">
                <PdfViewerComponent document={document} />
            </div>      
        </div>
        <div label="Question 2">
            <div className="Ann-viewer">
                <button className="discreet-button"
                onClick={() => setDocument("another-example.pdf")}>
                    Refresh page
                </button>
                <div className='rowC'>
                    <button className="version-button"
                    onClick={() => setDocument("another-example.pdf")}>
                        See pdf version
                    </button>
                    <button className="version-button"
                    onClick={() => setDocument("another-example.pdf")}>
                        See original version
                    </button>
                </div>
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