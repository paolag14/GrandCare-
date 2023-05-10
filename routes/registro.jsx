import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";



export default function Registro() {

 


  return (
    
    <div>
      
      <br></br>
      <center>
        <img src= {Logo}></img>
      </center>
      
    
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      ></nav>
      <br></br>

        <h1 className="Titulos">REGISTRO </h1>
      
        <br></br>

        <center> 
        
        <Link to="/registro/doctor"> <button className="buttonMenu"> Registrarse como doctor </button> </Link> {" "}
       
        <Link to="/registro/cuidador"> <button className="buttonMenu"> Registrarse como cuidador </button> </Link> {" "}
        </center>

        <br></br>
        <Link to="/"> <button className="buttonMenuOtro"> Ya tengo una cuenta </button> </Link> {" "}

        
      
      <Outlet />
    </div>
  );
}