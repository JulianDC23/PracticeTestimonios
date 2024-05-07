import React from 'react'
import Testimonos from './Components/Testimonos'
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import test from './App.module.scss';

function App() {
  const arr = [
    {
      id: 1,
      name:'Shawn Wang',
      pais:'Singapur',
      image: image1,
      cargo:'Ingeniero de Software',
      empresa:'Amazon',
      test:'Da miedo cambiar de carrera. solo gane la confianza de que podia programar'

    }
    ,
    {
      id: 2,
      name:'Sarah Chima ',
      pais:'Italy',
      image:image2,
      cargo:'Ingeniero en Sistemas',
      empresa:'ChatDesk',
      test:'Da miedo cambiar de carrera. solo gane la confianza de que podia programar'
    },
    {
      id: 3,
      name:'Emma Bostian',
      pais:'France',
      image:image3,
      cargo:'Ingeniero Informatico',
      empresa:'Spotify',
      test:'Da miedo cambiar de carrera. solo gane la confianza de que podia programar'
    }
  ]
  return (
    <>
    <div className={test.container__main}>
      <h1 className={test.tittle}>"Esto es una practica"</h1>
      {arr.map((arr) => {
        return <Testimonos key={arr.id} name={arr.name} pais={arr.pais} image={arr.image} cargo={arr.cargo} empresa={arr.empresa} test={arr.test} />
      })
    }
    </div>
    </>
  )
}

export default App
