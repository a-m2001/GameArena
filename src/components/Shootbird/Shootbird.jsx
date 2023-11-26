import React from 'react';
import './Shootbird.css';

function Shootbird() {
  return(
    <body className='shootbird-body'>
    <div class="wrapper">
      <div class="timer">
          <span></span>    
      </div>
      <div class="gameover">GAME OVER</div>
      <h1 className='shootbird-heading'>KILL THE BIRDS <span>(shoot the birds)</span></h1>
      
      <input class="input-circle input-circle1" type="radio" id="circle1" />
      <input class="input-circle input-circle2" type="radio" id="circle2" />
      <input class="input-circle input-circle3" type="radio" id="circle3" />
      <input class="input-circle input-circle4" type="radio" id="circle4" />
      <input class="input-circle input-circle5" type="radio" id="circle5" />
      <input class="input-circle input-circle6" type="radio" id="circle6" />
      
      <label for="circle1" class="pajaro pajaro1"><span></span></label>
      <label for="circle2" class="pajaro pajaro2"><span></span></label>
      <label for="circle3" class="pajaro pajaro3"><span></span></label>
      <label for="circle4" class="pajaro pajaro4"><span></span></label>
      <label for="circle5" class="pajaro pajaro5"><span></span></label>
      <label for="circle6" class="pajaro pajaro6"><span></span></label>
      <div class="sum">SCORE:</div>

    </div>
    </body>
  ); 
}

export default Shootbird;
