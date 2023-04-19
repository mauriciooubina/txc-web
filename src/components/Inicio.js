import React, { useState } from "react";
import "../styles/Inicio.css";
import fotoEquipo from "../img/equipo-completo-lejos.jpeg";
import fechas from '../data/fechas.json';

var nroFecha = 4;

export const Inicio = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const fechaActual = fechas.find( f => f.fecha === nroFecha);
  const prox = new Date(fechaActual.dia);
  const proxDia = prox.getDate();
  const proxMes = prox.toLocaleString("es-ES", { month: "long" });
  const proxHora = (prox.getHours() + ":" + prox.getMinutes());

  setInterval(() => {
    const fechaHoy = new Date();
    const proxFecha = new Date(fechaActual.dia);
    if(fechaHoy > proxFecha) nroFecha += 1;
    const falta = proxFecha - fechaHoy;
    const dias = Math.floor(falta / (1000 * 60 * 60 * 24));
    const horas = Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((falta % (1000 * 60)) / 1000);
    setDias(dias);
    setHoras(horas);
    setMinutos(minutos);
    setSegundos(segundos);
  }, 1000);

  return (
    <div className="contenedor">
      <h1>Proxima fecha</h1>
      <div className="countdown">
        <div className="prox-fecha-contenedor">
          <p id="prox-fecha">
            ¡Faltan {dias} dias, {horas} horas, {minutos} minutos y {segundos} segundos!
          </p>
        </div>
        <div className="countdown-contenedor" id="countdown">
          <p id="fecha">
            <b>Toma x Curioso</b> vs <b>{fechaActual.rival}</b> por la <b>Fecha {fechaActual.fecha}</b>
          </p>
          <p>Sábado {proxDia} de {proxMes} a las {proxHora} en Grün FC</p>
        </div>
      </div>
      <div className="foto-equipo">
        <img className="foto-equipo" src={fotoEquipo} alt="foto-equipo"></img>
      </div>
    </div>
  );
};

export default Inicio;
