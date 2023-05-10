import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function MenuCuidador() {
    return (
      <div>
      <br></br>
      <center> <img src= {Logo}></img>  </center>
      <br></br>


  
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
         
      </nav>
      <br></br>

      <h1 className="Titulos">MENÚ DE CUIDADOR</h1>

      <Outlet />
      
      <br></br>
      <center> 
      <Link to="/menuCuidador/registrarPaciente"> <button className="buttonMenu"> Registrar paciente </button> </Link> {" "}
      
      <Link to="/pruebaCuidador"> <button className="buttonMenu"> Realizar prueba </button> </Link> {" "}

      </center>
      <br></br>

      <Link to="/"> <button className="buttonCerrarSesion"> Cerrar sesión </button> </Link> {" "}

      

      </div>
    );
}