import React from 'react'
import tabla from '../data/tabla.json'

export const Tabla = () => {
  return (
    <div className='posiciones'>
      <h3>Tabla de Posiciones</h3>
      <table className='tabla-posiciones'>
        <thead>
          <tr>
            <th><b>Equipo</b></th>
            <th><b>Puntos</b></th>
            <th><b>Partidos Jugados</b></th>
            <th><b>Partidos Ganados</b></th>
            <th><b>Partidos Empatados</b></th>
            <th><b>Partidos Perdidos</b></th>
            <th><b>Goles A Favor</b></th>
            <th><b>Goles En Contra</b></th>
            <th><b>Diferencia Gol</b></th>
          </tr>
        </thead>
        <tbody>
        {tabla.map(datos => (
            <tr key={datos.equipo} className={datos.equipo}>
              <td>{datos.equipo}</td>
              <td>{datos.puntos}</td>
              <td>{datos.jugados}</td>
              <td>{datos.ganados}</td>
              <td>{datos.empatados}</td>
              <td>{datos.perdidos}</td>
              <td>{datos.gf}</td>
              <td>{datos.gc}</td>
              <td>{datos.gf - datos.gc}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Tabla;