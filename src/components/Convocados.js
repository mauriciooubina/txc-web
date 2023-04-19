import React from 'react'
import convocados from '../data/convocados.json'


export const Convocados = () => {
  return (
    <div className='convocados-container'>
        <div className='convocados'>
            <ul className='lista-convocados'>
                <p>Convocados</p>
                {convocados.convocados.map((valor) => 
                    <li key={valor.jugador}>{valor.jugador}</li>
                )}
            </ul>
        </div>
        <div className='bajas'>
            <ul className='lista-bajas'>
                <p>Bajas</p>
                {convocados.bajas.map((valor) => 
                    <li key={valor.jugador}>{valor.jugador} - <b>{valor.motivo}</b></li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Convocados;
