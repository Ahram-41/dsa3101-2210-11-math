import React from "react";
import "./Profile.css";
import Card from './Components/Cards'
import Navbar from './Components/Navbar.js';





function Profile (){
    return (
        <>
        <Navbar /> 
        <div class="tab1cards">
        <Card 
        title='ST3131'
        imageUrl='https://www.stat.nus.edu.sg/wp-content/uploads/sites/8/2020/04/08235J.gif'
        body='Regression Analysis'
        />

        <Card 
        title='ST3248'
        imageUrl='https://www.looper.com/img/gallery/these-things-happen-in-every-single-shrek-movie/l-intro-1655497837.jpg'
        body='Stastical Learning 1'
        />
        <Card 
        title='DSA3101'
        imageUrl='https://media.istockphoto.com/photos/female-student-picture-id1264296727?b=1&k=20&m=1264296727&s=170667a&w=0&h=uGwjyDSjSqIsq9jCwnCHpQDtnDkNIU3Jjoq8cTN8Pss='
        body='Data Science in Practice'
        />
        <Card 
        title='DSA3101'
        imageUrl='https://media.istockphoto.com/photos/woman-with-laptop-at-night-sitting-at-the-desk-writing-something-into-picture-id682274208?b=1&k=20&m=682274208&s=170667a&w=0&h=DMKKSDv_j_jAtMp58f8z4-W27ziabrSTRixDjwbJwmg='
        body='Data Science in Practice'
        />
        <Card 
        title='DSA3101'
        imageUrl='https://media.istockphoto.com/photos/female-student-picture-id1264296727?b=1&k=20&m=1264296727&s=170667a&w=0&h=uGwjyDSjSqIsq9jCwnCHpQDtnDkNIU3Jjoq8cTN8Pss='
        body='Data Science in Practice'
        />
        <Card 
        title='DSA3101'
        imageUrl='https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc1ODc5NDk0MDUwOTQx/life-quotes-dolly.jpg'
        body='Data Science in Practice'
        />
        </div>

        </>

    );  
}

export default Profile;