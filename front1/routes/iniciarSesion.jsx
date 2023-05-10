import { Outlet, Link } from "react-router-dom";
import './style.css';
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function Registro(){

  const [correoRegistro, setCorreoRegistroDoc] = useState("");
  const [contraseñaRegistro, setContraseñaRegistroDoc] = useState("");
  const [listaCorreoDoc, setlistaCorreoDoc] = useState([]);
  const [listaCorreoCui, setlistaCorreoCui] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3003/credencialesDoctores").then((response) => {
      console.log(response.data);
      setlistaCorreoDoc(response.data);
    });

    Axios.get("http://localhost:3003/credencialesCuidadores").then((response) => {
      console.log(response.data);
      setlistaCorreoCui(response.data);
    });

  }, []);


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

      <p className="Titulos">Iniciar Sesión</p>

      <Outlet />

      <label > Correo: </label>
       <input type="text" id ="correito" onChange= {(e) => {
         setCorreoRegistroDoc(e.target.value) }}/>
         

        <label> Contraseña: </label>
        <input type="text" id ="contraseñita" onChange= {(e) => {
         setContraseñaRegistroDoc(e.target.value)}}/>

       <br></br> 
       

       {listaCorreoDoc.map((val)=> {
         if (val.correo === correoRegistro && correoRegistro != "" && val.contraseña === contraseñaRegistro && contraseñaRegistro != ""){
          return <Link to="/menuDoctor"> <button> Iniciar Sesión </button> </Link>
         } 
       })}

      {listaCorreoCui.map((val)=> {
         if (val.correo === correoRegistro && correoRegistro != "" && val.contraseña === contraseñaRegistro && contraseñaRegistro != ""){
          return <Link to="/menuCuidador"> <button> Iniciar Sesión </button> </Link>
         
         }
       })}

       <br></br>
       <br></br>

      <body className="bodyRojo"> El botón de "Iniciar Sesión" solo aparecerá al ingresar credenciales válidas </body>
       <br></br>  

       <center>¿No está registrado?</center>
       <br></br>
        <Link to="/registro"> <button> Registrarse </button> </Link> {" "}

        <br></br>

        

      

      

      



       

      
    </div>
  );
}