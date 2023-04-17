import React, { useState } from "react";
import "../styles/Inicio.css";
import fotoEquipo from "../img/equipo-completo-lejos.jpeg";

const rivales = ["Pelusa FC", "Salmon FC", "Baiano Sports", "La Gran Coco", "AS Roma", "La Naranja de Juli", "Fecha libre", ];
const nroFecha = [1, 2, 3, 4, 5, 6, 7];
const fecha = ["2023-04-01T09:50:00", "2023-04-08T09:00:00", "2023-04-15T012:20:00", "2023-04-22T13:30:00", "2023-04-29T09:00:00", "2023-05-06T09:00:00", "2023-05-13T09:00:00", ];
const fechaActual = 4;

export const Inicio = () => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  const intervalId = setInterval(() => {
    const fechaHoy = new Date();
    const proxFecha = new Date(fecha[fechaActual - 1]);
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
            <b>Toma x Curioso</b> vs <b>{rivales[fechaActual - 1]}</b> por la <b>Fecha {nroFecha[fechaActual - 1]}</b>
          </p>
        </div>
      </div>
      <div className="foto-equipo">
        <img className="foto-equipo" src={fotoEquipo} alt="foto-equipo"></img>
      </div>
    </div>
  );
};

export default Inicio;
