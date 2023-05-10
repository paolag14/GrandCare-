import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";


export default function VerPacientes() {

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

  const [buscando, setBuscando] = useState("");

  const [idCuidadorLista, setIdCuidadorLista] = useState([]);


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

  useEffect(() => {
    Axios.get("http://localhost:3003/verPacientes").then((response) => {
      console.log(response.data);
      setPacienteLista(response.data);
    });

  }, []);
  
 
  useEffect(() => {
    Axios.get("http://localhost:3003/verCuidadores").then((response) => {
      console.log(response.data);
      setIdCuidadorLista(response.data);
    });

  }, []);


  class Botoncito extends React.Component{
    state = {
      showMessage: false
    }
    onButtonClickHandler = () => {
     this.setState({showMessage: true});
    };
  
    render(){ 
      return(<div className="App">
        
       
       {this.state.showMessage && <p>    {pacienteLista.map((val)=> {
            if(val.quejaMemoria === 1){
                val.quejaMemoria = "Sí";
            }
            else if (val.quejaMemoria === 0){
                val.quejaMemoria = "No";
            }
            if(val.nombrePaciente != null && val.apellidoP != null && val.apellidoM != null){
            if(val.nombrePaciente.includes(buscando) || val.apellidoP.includes(buscando) || val.apellidoM.includes(buscando)){
                return <div>
                  <hr />
                <h3> Nombre: {val.nombrePaciente} {val.apellidoP} {val.apellidoM}
                <p> ID del paciente: {val.idPaciente}</p>
                <p> Teléfono de contacto: {val.telefonoContacto}</p>
                <p> Padecimientos: {val.padecimientos}</p>
                <p> Sexo: {val.sexo}</p>
                <p> Fecha de nacimiento: {val.fechaNacimiento}</p>
                <p> Queja de memoria: {val.quejaMemoria}</p>
                </h3>

                {idCuidadorLista.map((val2)=> {
                  if (val.responsable == val2.idCuidador){
                    return <div>
                      <body>Cuidador del paciente: </body>
                      <body> ID: {val.responsable} | Nombre: {val2.nombreCuidador} {val2.apellidosCuidador}</body>
                      <br />
                  </div>}

                 })}


                      </div>
                
            }
            else {
                
            }
          }
        })}
        </p>}
        <button onClick={this.onButtonClickHandler}>Buscar paciente</button>
      
        
      </div>);
  
    }
  }



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
      
      <h1 className="Titulos"> BUSCAR PACIENTE </h1>
   
       <label> Ingrese paciente a buscar (nombre o apellido): </label>
       <input type="text" name="elbuscando" onChange= {(e) => {
         setBuscando(e.target.value)}}/>

        <br></br>
        <Botoncito> Buscar </Botoncito>

        

       
        <br></br>

       
       

        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
      </nav>

      <br></br>
       <h1 className="Titulos"> PACIENTES REGISTRADOS </h1>
       <br></br>



       {pacienteLista.map((val)=> {
         
        if (val.quejaMemoria === 1) {
          val.quejaMemoria = "Sí";
        }
        else if (val.quejaMemoria === 0) {
          val.quejaMemoria = "No";
        }


         return <div> <h3> ID del paciente: {val.idPaciente} | Nombre del paciente: {val.nombrePaciente} | Apellidos: {val.apellidoP}  {val.apellidoM} | Padecimientos: {val.padecimientos} | Teléfono de contacto: {val.telefonoContacto} | Sexo: {val.sexo} | Fecha de nacimiento: {val.fechaNacimiento} | Queja de memoria: {val.quejaMemoria} </h3>
              <body> Cuidador del paciente:</body>

            {idCuidadorLista.map((val2)=> {
                  if (val.responsable == val2.idCuidador){
                    return <body> ID de responsable: {val.responsable} | Nombre de responsable: {val2.nombreCuidador} {val2.apellidosCuidador} </body>
                  }
                 })}
                  <hr></hr>
                 
                 


         </div>
         
         
       })}

       


        


    </div>
  );
}