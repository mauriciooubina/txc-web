import React from 'react'
import estadisticas from '../data/estadisticas.json'

export const Estadisticas = () => {
  return (
    <div className='estadisticas'>
      <h3>Estadisticas</h3>
      <table className='tabla-estadisticas'>
        <thead>
          <tr>
            <th><b>Jugador</b></th>
            <th><b>Partidos Jugados</b></th>
            <th><b>Goles</b></th>
            <th><b>Tarjetas Amarillas</b></th>
            <th><b>Tarjetas Rojas</b></th>
          </tr>
        </thead>
        <tbody>
        {estadisticas.map(datos => (
            <tr key={datos.jugador}>
              <td>{datos.jugador}</td>
              <td>{datos.partidos}</td>
              <td>{datos.goles}</td>
              <td>{datos.amarillas}</td>
              <td>{datos.rojas}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Estadisticas;