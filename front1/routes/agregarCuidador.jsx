import Axios from "axios";
import React, {useState, useEffect} from "react";

export default function AgregarCuidador() {
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
      <li key={val.idCuidador}>{result.text}</li>
      <h1> API BACK & FRONT </h1>
       <label> Id del Cuidador: </label>
       <input type="text" idCuidador="id" onChange= {(e) => {
         setIdCuidador(e.target.value)}}/>

       <label> Nombre del cuidador: </label>
       <input type="text" nombreCuidador="nombre" onChange= {(e) => {
         setNombreCuidador(e.target.value)}}/>
        
        <label> Apellidos cuidador: </label>
       <input type="text" apellidosCuidador="apellidos cuidador" onChange= {(e) => {
         setApellidosCuidador(e.target.value)}}/>

        <label> Teléfono cuidador: </label>
       <input type="text" telefonoCuidador="teléfono" onChange= {(e) => {
         setTelefonoCuidador(e.target.value)}}/>

        <label> Relación con el paciente: </label>
       <input type="text" relacionPaciente="relación" onChange= {(e) => {
         setRelacionPaciente(e.target.value)}}/>

        <label> Correo: </label>
       <input type="text" correo="correo" onChange= {(e) => {
         setCorreo(e.target.value)}}/>

        <label> contraseña: </label>
       <input type="text" contraseña="contraseña" onChange= {(e) => {
         setContraseña(e.target.value)}}/>

       <button onClick={submitCuidador}> Submit </button>

       {idCuidadorLista.map((val)=> {
         return <h3> ID del cuidador: {val.idCuidador} | Nombre del cuidador: {val.nombreCuidador} 
         | Apellidos: {val.apellidosCuidador} | Teléfono: {val.telefonoCuidador} | Relación con paciente: {val.relacionPaciente}
         | Correo: {val.correo} | contraseña: {val.contraseña}</h3>
       })}
    </div>
  );
  
}