
import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';

function Card4({title,imageUrl,body}) {
    return (
        
        <div className= 'card-container'>
            <Link style={{color: 'black'}} to ={'/mod4'}>
            <div className="image-container">
                <img src="computer_stats.jfif" alt='' />
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
                <button onclick= {'/mod4'}>
                    <a>View more</a>  
                </button>
            </div>
            </Link>
        </div>
        
    )
}

export default Card4;
