import React, { useEffect } from 'react';
import { movement } from 'movanoba'; 

export const ExampleComponent = () => {
  useEffect(() => {
    movement();
  });

  return (
    <div>
<h3>This is sample animations for Movanova</h3>

<div className="mova-wrap">
        <div className="monoContainer">
          <div className="monoLand" data-movement="closeUP 1.4s" style={{ backgroundColor: 'gray', width:'100%', minWidth: '400px',maxWidth: '600px', height: '550px'}}>
          closeUP 
             </div>
        </div>
 </div>

 <div className="mova-wrap">
        <div className="duoContainer">
          <div className="duoLand" data-movement="closeLEFT 1.4s" style={{   width: '400px', height: '250px', background: 'linear-gradient(to top,  #006633, #00CC66)' }}>
            closeLEFT
          </div>
          <div className="duoLand" data-movement="closeRIGHT 1.4s" style={{   width: '400px', height: '250px',   background: 'linear-gradient(to top,  #006633, #00CC66)'}}>
            closeRIGHT
          </div>
        </div>
</div>


<div className="mova-wrap">
        <div className="trioContainer">
          
          <div className="trioLand" data-movement="wakeupLEFT 1.4s" style={{backgroundColor: '#888888', width: '300px', height: '250px'}}>
          wakeupLEFT
          </div>
          <div className="trioLand" data-movement="closeDOWN 1.4s" style={{backgroundColor: '#606060',  width: '300px', height: '250px'}}>
            closeDOWN</div>
          <div className="trioLand" data-movement="wakeupRIGHT 1.4s"  style={{backgroundColor: '#888888',  width: '300px', height: '250px'}}>
           wakeupRIGHT</div>
        </div>
</div>

<div className="mova-wrap">

        <div className="monoContainer">
          <div className="monoLand" data-movement="enlarge 1.4s" style={{ backgroundColor: 'gray', width: '600px', height: '450px'}}>
          enlarge
             </div>
        </div>
 </div>


 <div className="mova-wrap">
        <div className="duoContainer">
          <div className="duoLand" data-movement="cycleLEFT 2.4s" style={{  backgroundColor: '#A0A0A0', width: '350px', height: '350px'}}>
            cycleLEFT
          </div>

          <div className="duoLand" data-movement="cycleRIGHT 1.4s" style={{ 
            width: '350px', height: '350px', background: 'linear-gradient(to right, #505050, #ffffff)', /* Gradient from #505050 to white */
            borderRadius: '100%'
          }}>
          cycleRIGHT
          </div>



        </div>


 </div>



 <div className="mova-wrap">
        <div className="duoContainer">
          <div className="duoLand" data-movement="twistUP" style={{   width: '200px', height: '250px', background: 'linear-gradient(to top,  #006633, #00CC66)' }}>
            twistUP
          </div>
          <div className="duoLand" data-movement="twistDOWN" style={{   width: '200px', height: '250px',   background: 'linear-gradient(to top,  #006633, #00CC66)'}}>
            twistDOWN
          </div>
        </div>

        <div className="duoContainer">
          <div className="duoLand" data-movement="frameLEFT" style={{   width: '250px', height: '250px', background: 'green' }}>
            frameLEFT
          </div>
          <div className="duoLand" data-movement="frameRIGHT" style={{   width: '250px', height: '250px',   background: 'green'}}>
            frameRIGHT
          </div>
        </div>
</div>




 <div className="mova-wrap">
        <div className="trioContainer">
          
          <div className="trioLand" data-movement="twistLEFT 1.4s" style={{backgroundColor: '#888888', width: '300px', height: '250px'}}>
          twistLEFT
          </div>
          <div className="trioLand" data-movement="show 1.4s" style={{backgroundColor: '#606060',  width: '300px', height: '250px'}}>
           show</div>
          <div className="trioLand" data-movement="twistRIGHT 1.4s"  style={{backgroundColor: '#888888',  width: '300px', height: '250px'}}>
           twistRIGHT</div>
        </div>
</div>





<div className="mova-wrap">
        <div className="duoContainer">
          <div className="duoLand" data-movement="edgeTOPLEFT" style={{   width: '150px', height: '150px', background: 'orange' }}>
          edgeTOPLEFT
          </div>
          <div className="duoLand" data-movement="edgeTOPRIGHT" style={{   width: '150px', height: '150px', background: 'orange' }}>
          edgeTOPRIGHT
           </div>
        </div>
        <div className="duoContainer">
          <div className="duoLand" data-movement="edgeDOWNLEFT" style={{  width: '150px', height: '150px', background: 'orange' }}>
          edgeDOWNLEFT
          </div>
          <div className="duoLand" data-movement="edgeDOWNRIGHT" style={{  width: '150px', height: '150px', background: 'orange' }}>
          edgeDOWNRIGHT
          </div>
        </div>



</div>



    </div>
  );
};