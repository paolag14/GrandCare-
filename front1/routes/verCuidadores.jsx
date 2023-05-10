import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";


export default function VerCuidadores() {
  const [idCuidador, setIdCuidador] = useState("");
  const [nombreCuidador, setNombreCuidador] = useState("");
  const [apellidosCuidador, setApellidosCuidador] = useState("");
  const [telefonoCuidador, setTelefonoCuidador] = useState("");
  const [relacionPaciente, setRelacionPaciente] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [idCuidadorLista, setIdCuidadorLista] = useState([]);
  const [pacienteLista, setPacienteLista] = useState([]);


  
 
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

  useEffect(() => {
    Axios.get("http://localhost:3003/verPacientes").then((response) => {
      console.log(response.data);
      setPacienteLista(response.data);
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
 
      <body> <Link to="/menuDoctor"> <button className="izquierda"> Volver a menú </button> </Link> </body>
      </nav>

      <Outlet />

      <br></br>
      
      <h1 className="Titulos"> CUIDADORES REGISTRADOS </h1>
      <br></br>
     

       {idCuidadorLista.map((val)=> {

         return <div>
           <hr/> <h3> ID del cuidador: {val.idCuidador} | Nombre del cuidador: {val.nombreCuidador} | Apellidos: {val.apellidosCuidador} | Teléfono: {val.telefonoCuidador} </h3>
         <body> Pacientes en su cuidado:</body>
         {pacienteLista.map((val2)=> {
          if (val.idCuidador == val2.responsable){
            return <body> ID de paciente: {val2.idPaciente} | Nombre de paciente: {val2.nombrePaciente} {val2.apellidoP} {val2.apellidoM} </body>
          }
         })}
         <br />
         </div>
       })}
       <br></br>
       <br />
       
    </div>
    
  );
  
}