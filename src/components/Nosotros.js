import React from 'react'
import '../styles/Nosotros.css'
import Instagram from '../img/instagram.png'
import LaRedonda from '../img/laredonda.jpeg'
import { Link } from 'react-router-dom';
import FotoCampeones from '../img/foto-campeon-2-8.jpg'
import FotoCampeones2 from '../img/foto-equipo-titular.jpeg'

export const Nosotros = () => {
  return (
    <div className='contenedor'>
      <h1>Nosotros</h1>
      <div className='nosotros'>
        <div className='campeones'>
          <div className='campeones-text'>
            <h2>CAMPEONES TORNEO LIONEL MESSI F5🏆 Torneo Stoper Primera</h2>
          </div>
          <div className='campeones-img'>
            <img src={FotoCampeones} alt="foto-campeones" style={{width: '280px'}}/>
            <img src={FotoCampeones2} alt="foto-campeones-2" style={{width: '315px', marginLeft: '10px'}}/>
          </div>
        </div>

        <div className="redes-sociales">
          <div className="redes-sociales-contenedor">
            <ul className="redes-sociales">
              <li> <Link to="https://www.instagram.com/tomaxcurioso.fc/" target="_blank" rel="noreferrer">
                  <div className="redes-sociales-icono"> <img src={Instagram} alt="logo-instagram"/> </div>
                  <div className="redes-sociales-texto"> Seguinos en Instagram</div>
                  <div className="redes-sociales-texto">@tomaxcurioso.fc</div> </Link>
              </li>
              <li> <Link to="http://www.laredondafutbol.com" target="_blank" rel="noreferrer">
                  <div className="redes-sociales-icono"> <img src={LaRedonda} alt="logo-la-redonda"/> </div>
                  <div className="redes-sociales-texto"> La Redonda </div>
                  <div className="redes-sociales-texto">Pagina oficial</div> </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosotros;