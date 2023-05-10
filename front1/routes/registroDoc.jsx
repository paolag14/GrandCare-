import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";


export default function RegistroDoc() {

  class Botoncito extends React.Component{
    state = {
      showMessage: false
    }
    onButtonClickHandler = () => {
     this.setState({showMessage: true});
    };
  
    render(){ 
      return(<div className="App">
       {this.state.showMessage} 
      
       <Link to ="/"> <button onClick={this.onButtonClickHandler}> Iniciar Sesión</button> </Link>
       
      
      </div>);
  
    }
  }


    const [idDoctor, setIdDoctor] = useState("");
    const [idPacientes, setIdPacientes] = useState("");
    const [nombreDoctor, setNombreDoctor] = useState("");
    const [apellidosDoctor, setApellidosDoctor] = useState("");
    const [organizacion, setOrganizacion] = useState("");
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
        correoDoctor: correo,
        contraseñaDoctor: contraseña
        
        }).then(()=>{
          alert("successful insert");
          
        });

     


    };

    useEffect(() => {
      Axios.get("http://localhost:3003/verDoctores").then((response) => {
        console.log(response.data);
        setDoctorLista(response.data);
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

      <h1 className="Subtitulos"> REGISTRO DE DOCTOR </h1>
      <label>No puede dejar ningún campo vacío</label>
       

       <label> Nombre del doctor: </label>
       <input type="text" nombrePaciente="nombre" onChange= {(e) => {
         setNombreDoctor(e.target.value)}}/>
        
        <label> Apellidos: </label>
       <input type="text" apellidosDoctor="apellidos" onChange= {(e) => {
         setApellidosDoctor(e.target.value)}}/>

        <label> Organización: </label>
       <input type="text" organizacion="organización" onChange= {(e) => {
         setOrganizacion(e.target.value)}}/>

        <label> Correo del doctor: </label>
       <input type="text" correo="correo" onChange= {(e) => {
         setCorreoD(e.target.value)}}/>

        <label> Contraseña: (Debe tener más de 8 caracteres)</label>
       <input type="text" contraseña="contraseña" onChange= {(e) => {
         setContraseñaD(e.target.value)}}/>

        <br></br>

       
       

       <br></br>
       <Link to ="/"> <button disabled={!nombreDoctor || !apellidosDoctor || !organizacion || !correo  || !contraseña || (contraseña.length < 8) }  onClick={submmitDoctor}> Crear cuenta </button> </Link>
       
      

       
    </div>
  );
}
