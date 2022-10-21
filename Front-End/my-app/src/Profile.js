import React from "react";
import "./Profile.css";
import Card from './Components/Cards'


function Profile (){
    return (
        <div classname= 'Profile'>
            <Card 
            title='ST3131'
            imageUrl='https://www.stat.nus.edu.sg/wp-content/uploads/sites/8/2020/04/08235J.gif'
            body='Regression Analysis'
            />
        </div>
    );  
}

export default Profile;