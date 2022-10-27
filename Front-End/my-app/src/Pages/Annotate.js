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

function Annotate() {
    const [document, setDocument] = useState("document.pdf");

    return (
    <>
    <Navbar />
    <Tabs>
        <div label="Question 1">
            <div className="Ann-viewer">
                <button className="Ann-button" 
                onClick={() => setDocument("document.pdf")}>
                Refresh page
                </button>
                <PdfViewerComponent document={document} />
            </div>
        </div>
        <div label="Question 2">
            <div className="Ann-viewer">
                <button className="Ann-button"
                onClick={() => setDocument("another-example.pdf")}>
                    Refresh page
                </button>
                <PdfViewerComponent document={document} />
            </div>
        </div>
        <div label="See latex version">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
    </Tabs>
    </>
  );
}
  
  export default Annotate;