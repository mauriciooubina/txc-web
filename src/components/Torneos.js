import React from 'react'
import Fixture from '../components/Fixture';
import Estadisticas from '../components/Estadisticas';
import '../styles/Torneos.css'

export const Torneos = () => {
  return (
    <div className='contenedor'>
      <h1>Torneos</h1>

      <Fixture/>

      <Estadisticas/>

    </div>
  )
}

export default Torneos;