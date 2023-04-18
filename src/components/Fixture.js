import React from 'react';
import fixture from '../data/fixture.json'

export const Fixture = () => {
  return (
    <div className='fixture'>
      <h3>Fixture</h3>
      <table className="tabla-torneo">
        <thead>
          <tr>
            <th><b>Fecha</b></th>
            <th><b>Rival</b></th>
            <th><b>Resultado</b></th>
            <th><b>Figura</b></th>
            <th><b>Goleadores</b></th>
          </tr>
        </thead>
        <tbody>
          {fixture.map(datos => (
            <tr key={datos.rival}>
              <td>Fecha {datos.fecha}</td>
              <td>{datos.rival}</td>
              <td>{datos.resultado !== null ? datos.resultado : '-'}</td>
              <td>{datos.figura !== null ? datos.figura : '-'}</td>
              <td>{datos.goleadores !== null ? datos.goleadores : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fixture;