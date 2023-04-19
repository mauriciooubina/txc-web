import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
import logoTxC from "../img/logoTxC.png";
export const Header = () => {
  return (
      <header>
        <NavLink exact="true" to="/"> <img className="logo-txc-menu" src={logoTxC} alt="Escudo Toma x Curioso" /> </NavLink>
        <nav className="menu">
          <ul>
            <li> <NavLink to="/">Inicio</NavLink> </li>
            <li> <NavLink to="/plantel">Plantel</NavLink> </li>
            <li> <NavLink to="/torneos">Torneos</NavLink> </li>
            <li> <NavLink to="/nosotros">Nosotros</NavLink> </li>
          </ul>
        </nav>
      </header>
  );
};
