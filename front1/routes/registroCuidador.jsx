import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";


export default function RegistroCuidador() {
  const [idCuidador, setIdCuidador] = useState("");
  const [nombreCuidador, setNombreCuidador] = useState("");
  const [apellidosCuidador, setApellidosCuidador] = useState("");
  const [telefonoCuidador, setTelefonoCuidador] = useState("");
  const [relacionPaciente, setRelacionPaciente] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [idCuidadorLista, setIdCuidadorLista] = useState([]);

  
 
  const submitCuidador = () => {
    Axios.post("http://localhost:3003/agregarCuidador", {
      idCuidadorCuidador:idCuidador, 
      nombreCuidadorCuidador: nombreCuidador, 
      apellidosCuidadorCuidador: apellidosCuidador, 
      telefonoCuidadorCuidador: telefonoCuidador,
      relacionPacienteCuidador: relacionPaciente,
      correoCuidador: correo,
      contraseñaCuidador: contraseña}).then(()=>{
        alert("successful insert");
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:3003/verCuidadores").then((response) => {
      console.log(response.data);
      setIdCuidadorLista(response.data);
    });

  }, []);
 

  return (
    <div className="App">

      <br></br>
      <center> <img src= {Logo}></img>  </center>
      <br></br>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >

      <body> <Link to="/registro"> <button className="izquierda"> Volver a registro </button> </Link> </body>
         
      </nav>
      <Outlet />
      <br></br>



      <h1 className="Subtitulos"> REGISTRO DE CUIDADOR </h1>

      <label>No puede dejar ningún campo vacío</label>
      

       <label> Nombre del cuidador: </label>
       <input type="text" nombreCuidador="nombre" onChange= {(e) => {
         if (e.target.value != ""){
          setNombreCuidador(e.target.value)}
        console.log(e.target.value)}
        }/>
        
        <label> Apellidos cuidador: </label>
       <input type="text" apellidosCuidador="apellidos cuidador" onChange= {(e) => {
         if (e.target.value != ""){
          setApellidosCuidador(e.target.value)}}
        }/>

        <label> Teléfono cuidador: </label>
       <input type="text" telefonoCuidador="teléfono" onChange= {(e) => {
         if (e.target.value != ""){
          setTelefonoCuidador(e.target.value)}}
        }/>

        <label> Relación con el paciente: </label>
       <input type="text" relacionPaciente="relación" onChange= {(e) => {
         if (e.target.value != ""){
          setRelacionPaciente(e.target.value)}}
        }/>

        <label> Correo: </label>
       <input type="text" correo="correo" onChange= {(e) => {
         if (e.target.value != ""){
          setCorreo(e.target.value)}}
        }/>

        <label> Contraseña: (Debe tener más de 8 caracteres)</label>
       <input type="text" contraseña="contraseña" onChange= {(e) => {
         if (e.target.value != ""){
           setContraseña(e.target.value)}}
         }/>
         

         <br></br>

       <br></br>

       
     
       <Link to="/"> <button disabled={!nombreCuidador || !apellidosCuidador || !telefonoCuidador || !relacionPaciente || !correo || !contraseña || (contraseña.length < 8) } onClick={submitCuidador}> Crear cuenta </button> </Link> 
    </div>
    
  );
  
}