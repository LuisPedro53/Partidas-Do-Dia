import React from 'react';

function Resultado(props) {
  
  return (
    <div className=''>
      <h1 className='partidas'>Partida</h1>
      <div className='title-box'>
        <p></p>
        <p>X</p>
        <p></p>
      </div>
      <div className='title-box'>
        <div className='team'>
          <img src={props.result.teams.home.logo} alt="" />
          <p> {props.result.teams.home.name}</p>
        </div>
        <div className='team'>
          <img src={props.result.teams.away.logo} alt="" />
          <p> {props.result.teams.away.name}</p>
        </div>
        

      </div>
      <hr></hr>
      

    </div>
     
    
  );
}

export default Resultado;