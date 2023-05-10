import './App.css';
import Axios from "axios";
import React, {useState, useEffect} from "react";


function App() {

  /*
  //Cuidadores
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

  /*
  useEffect(() => {
    Axios.get("http://localhost:3003/verCuidadores").then((response) => {
      console.log(response.data);
      setIdCuidadorLista(response.data);
    });

  }, []);
  */
 

  /*
  // Para pacientes
  const [idPaciente, setIdPaciente] = useState("");
  const [responsable, setResponsable] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [padecimientos, setPadecimientos] = useState("");
  const [telefonoContacto, setTelefonoContacto] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [quejaMemoria, setQuejaMemoria] = useState("");


  const [pacienteLista, setPacienteLista] = useState([]);

  const submitPaciente = () => {
    Axios.post("http://localhost:3003/agregarPaciente", {
      idPacientePaciente:idPaciente, 
      responsablePaciente: responsable, 
      nombrePacientePaciente: nombrePaciente, 
      apellidoPPaciente: apellidoP,
      setApellidoMPaciente: apellidoM,
      padecimientosPaciente: padecimientos,
      telefonoContactoPaciente: telefonoContacto,
      sexoPaciente: sexo,
      fechaNacimientoPaciente: fechaNacimiento,
      quejaMemoriaPaciente: quejaMemoria
      
      }).then(()=>{
        alert("successful insert");
        
      })
  };

  /*
  useEffect(() => {
    Axios.get("http://localhost:3003/verPacientes").then((response) => {
      console.log(response.data);
      setPacienteLista(response.data);
    });

  }, []);
  */

  


  //------------------------------------------
  //Para doctores
    const [idDoctor, setIdDoctor] = useState("");
    const [idPacientes, setIdPacientes] = useState("");
    const [nombreDoctor, setNombreDoctor] = useState("");
    const [apellidosDoctor, setApellidosDoctor] = useState("");
    const [organizacion, setOrganizacion] = useState("");
    const [numPacientesAsignados, setNumPacientes] = useState("");
    const [correo, setCorreoD] = useState("");
    const [contraseña, setContraseñaD] = useState("");
  
    const [doctorLista, setDoctorLista] = useState([]);

    const submmitDoctor = () => {
      Axios.post("http://localhost:3003/agregarDoctor", {
        idDoctorDoctor:idDoctor, 
        idPacientesDoctor: idPacientes, 
        nombreDoctorDoctor: nombreDoctor, 
        apellidosDoctorDoctor: apellidosDoctor,
        organizacionDoctor: organizacion,
        numPacientesDoctor: numPacientesAsignados,
        correoDoctor: correo,
        contraseñaDoctor: contraseña
        
        }).then(()=>{
          alert("successful insert");
          
        })
    };

    useEffect(() => {
      Axios.get("http://localhost:3003/verDoctores").then((response) => {
        console.log(response.data);
        setDoctorLista(response.data);
      });
  
    }, []);
 


  return (
    <div>
      <p className='Titulos'> REGISTRO DE DOCTORES </p>
    
       <label > Id del doctor: </label>
       <input type="text" idDoctor="id" onChange= {(e) => {
         setIdDoctor(e.target.value)}}/>

        <label> Id de los pacientes asignados: </label>
       <input type="text" idPacientes="id" onChange= {(e) => {
         setIdPacientes(e.target.value)}}/>

       <label> Nombre del doctor: </label>
       <input type="text" nombrePaciente="nombre" onChange= {(e) => {
         setNombreDoctor(e.target.value)}}/>
        
        <label> Apellidos : </label>
       <input type="text" apellidosDoctor="apellidos" onChange= {(e) => {
         setApellidosDoctor(e.target.value)}}/>

        <label> Organización: </label>
       <input type="text" organizacion="organización" onChange= {(e) => {
         setOrganizacion(e.target.value)}}/>

        <label> Número de pacientes asignados: </label>
       <input type="text" numPacientesAsignados="num de pacientes" onChange= {(e) => {
         setNumPacientes(e.target.value)}}/>

        <label> Correo del doctor: </label>
       <input type="text" correo="correo" onChange= {(e) => {
         setCorreoD(e.target.value)}}/>

        <label> Contraseña: </label>
       <input type="text" contraseña="contraseña" onChange= {(e) => {
         setContraseñaD(e.target.value)}}/>
         

         <br></br>
         <br></br>


        <center><button className = 'button' onClick={submmitDoctor}> Submit </button></center>

        <br></br>
        <br></br>

        <p className='Subtitulos'> DOCTORES REGISTRADOS </p>
        <br></br>

        {doctorLista.map((val)=> {
        
         return <p className='body'> ID del doctor: {val.idDoctor} | Nombre del doctor: {val.nombreDoctor} | Id de pacientes asignados: {val.idPacientes}
         | Apellidos: {val.apellidosDoctor}  | Organización: {val.organizacion} | Número de pacientes asignados: {val.numPacientesAsignados} | Correo doctor: {val.correo}
         | Contraseña: {val.contraseña} </p>
         
       })}

       
        
    </div>
  );
}

export default App;