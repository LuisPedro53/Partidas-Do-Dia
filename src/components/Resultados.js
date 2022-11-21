import React from 'react';
import Resultado from './Resultado'

function Resultados(props) {
  return (
    <section className="results">
      {props.results.map((result, index) => (
        <Resultado key={index} result={result} />
      ))}
    </section>
    
  );
}

export default Resultados;