import { Outlet, Link } from "react-router-dom";
import './style.css';
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function MenuDoctor() {
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

      <Outlet />

      <h1 className="Titulos">MENÚ DE DOCTOR</h1>

      <br></br>
      
      <center> 
      <Link to="/menuDoctor/registrarPaciente"> <button className="buttonMenu"> Registrar paciente </button> </Link> {" "} <Link to="/menuDoctor/verPacientes"> <button className="buttonMenu"> Ver pacientes </button> </Link> {" "}
    
      
      <Link to="/menuDoctor/verCuidadores"> <button className="buttonMenu"> Ver cuidadores </button> </Link> {" "}

<br></br>  <br></br>
      <Link to="/menuDoctor/verDoctores"> <button className="buttonMenu"> Ver doctores </button> </Link> {" "}
     
      

      <Link to="/pruebaDoctor"> <button className="buttonMenu"> Realizar prueba </button> </Link> {" "}

      <Link to="/menuDoctor/verPruebas"> <button className="buttonMenu"> Ver Pruebas </button> </Link> {" "}
      
      </center>

      <br></br>
      <br></br>

      <Link to="/"> <button className="buttonCerrarSesion"> Cerrar sesión </button> </Link> {" "}


     
      

      </div>
    );
}