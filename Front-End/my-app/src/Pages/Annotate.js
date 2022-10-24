import React, { Component } from 'react'
import Navbar from '../Components/Navbar.js';
import Select from 'react-select';
import "./mod1.css";
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import { useEffect, useRef } from 'react';
import { useState } from "react";
import PdfViewerComponent from "../Components/PdfViewerComponent.js";

function Annotate() {
    const [document, setDocument] = useState("document.pdf");

    return (
    <>
    <Navbar />
    <div className="Ann">
        <button
        className="Ann-button"
        onClick={() => setDocument("another-example.pdf")}>
            Next Page
        </button>
      <div className="Ann-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
    </>
  );
}
  
  export default Annotate;