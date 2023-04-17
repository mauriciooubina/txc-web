import React from 'react'
import '../styles/Plantel.css'
import LucasSantillan from '../img/lucasSantillan.jpeg'
import LucasGnoffo from '../img/lucasGnoffo.jpeg'
import MauricioOubina from '../img/mauricioOubina.jpeg'
import AlejandroFourcade from '../img/alejandroFourcade.jpeg'
import FedericoPerez from '../img/federicoPerez.jpeg'
import AndreRibles from '../img/andreRibles.jpeg'
import SebastianFraga from '../img/sebastianFraga.jpeg'
import DanteSanMartin from '../img/danteSanMartin.jpeg'
import BautistaAyala from '../img/bautistaAyala.jpeg'


export const Plantel = () => {
  return (
    <div className="contenedor">
        <h1>Plantel</h1>
        <div className="plantel">
          <ul>
            <li>
              <img src={LucasSantillan} alt="Foto Lucas Santillan" />
              <p>Lucas Santillan (3)</p>
            </li>
            <li>
              <img src={LucasGnoffo} alt="Foto Lucas Gnoffo" />
              <p>Lucas Gnoffo (10)</p>
            </li>
            <li>
              <img src={MauricioOubina} alt="Foto Mauricio Oubiña" />
              <p>Mauricio Oubiña (8)</p>
            </li>
            <li>
              <img src={AlejandroFourcade} alt="Foto Alejandro Fourcade" />
              <p>Alejandro Fourcade (2)</p>
            </li>
            <li>
              <img src={FedericoPerez} alt="Foto Federico Perez" />
              <p>Federico Perez (7)</p>
            </li>
            <li>
              <img src={AndreRibles} alt="Foto Andre Ribles" />
              <p>Andre Ribles (4)</p>
            </li>
            <li>
              <img src={SebastianFraga} alt="Foto Sebastian Fraga" />
              <p>Sebastian Fraga (1)</p>
            </li>
            <li>
              <img src={DanteSanMartin} alt="Foto Dante San Martin"/>
              <p>Dante San Martin (5)</p>
            </li>
            <li>
              <img className='bautista-ayala' src={BautistaAyala} alt="Foto Bautista Ayala"/>
              <p>Bautista Ayala (6)</p>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Plantel;