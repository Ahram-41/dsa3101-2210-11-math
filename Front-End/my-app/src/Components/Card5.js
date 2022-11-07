
import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';

function Card5({title,imageUrl,body}) {
    return (
        
        <div className= 'card-container'>
            <Link style={{color: 'black'}} to ={'/mod5'}>
            <div className="image-container">
                <img src= "Linear_Model.png" alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p> {body}</p>
                </div>               
            </div>

            <div className="btn">
                <button onclick= {'/mod5'}>
                    <a>View more</a>  
                </button>
            </div>
            </Link>
        </div>
        
    )
}

export default Card5;
