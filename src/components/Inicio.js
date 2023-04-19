import React from "react";
import "../styles/Inicio.css";
import fotoEquipo from "../img/equipo-completo-lejos.jpeg";
import Convocados from "../components/Convocados";
import Countdown from "./Countdown";

export const Inicio = () => {
  return (
    <div className="contenedor">
      <h1>Proxima fecha</h1>

      <Countdown/>
      <div className="contenido">
        <div className="foto-equipo">
          <img className="foto-equipo" src={fotoEquipo} alt="foto-equipo"></img>
        </div>
        <Convocados/> 
      </div>     
    </div>
  );
};

export default Inicio;
