import React from 'react';
import { Button } from './Components/Button';
import './Home.css';

function Home() {
  return (

    <div  className='hero-container'  >
      <img src='utown.jpg'  />

      <h1>WELCOME.</h1>
      <p>Grade smarter, not Harder</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          onClick={'/login'}
        >
          LOGIN
        </Button>

      </div>
      </div>

  );
}

export default Home;