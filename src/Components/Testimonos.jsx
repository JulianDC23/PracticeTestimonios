import React from 'react'
import test from './testimonioDesing.module.scss';

function Testimonos(props) {
  return (
    <>
    <section className={test.container__testimonios}>  
      <img 
      className={test.image__style}
      src={props.image} 
      alt="image" 
      />
    
      <div className={test.container__text}>
        <p className={test.name__text}><strong>{props.name}</strong>en {props.pais}</p>
        <p className={test.cargo__text}>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className={test.testimonio__text}>"{props.test}"</p>
      </div>
    </section>
    </>
  );
}

export default Testimonos