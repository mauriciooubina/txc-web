import React,  { useState } from 'react'
import Fixture from '../components/Fixture';
import Estadisticas from '../components/Estadisticas';
import Tabla from '../components/Tabla.js'
import '../styles/Torneos.css'

export const Torneos = () => {
  const [fixture, setFixture] = useState(false);
  const [tabla, setTabla] = useState(false);
  const [estadisticas, setEstadisticas] = useState(false);

  const handleMenuClick = (option) => {
    setFixture(option === "fixture");
    setTabla(option === "tabla");
    setEstadisticas(option === "estadisticas");
  }
  
  return (
    <div className='contenedor'>
      <h1>Torneos</h1>
      

      <div className='menu-container'>
        <div className='menu-torneos'>
          <nav className='nav-torneos'>
            <button className='fixture' onClick={() => handleMenuClick('fixture')}>Fixture</button>
            <button className='tabla' onClick={() => handleMenuClick('tabla')} >Tabla de Posiciones</button>
            <button className='estadisticas' onClick={() => handleMenuClick('estadisticas')} >Estadisticas</button>
          </nav>
        </div>
        <div className='contenido'>
        <h2>Torneo la Redonda, Grün FC</h2>
          {fixture && <Fixture/>}
          {tabla && <Tabla/>}
          {estadisticas && <Estadisticas/>}
        </div>
      </div>
    </div>
  )
}

export default Torneos;