import Axios from "axios";
import React, {useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";


export default function VerPruebas() {
   
    const [pruebaLista, setPruebaLista] = useState([]);
    const [doctorLista, setDoctorLista] = useState([]);
    const [cuidadorLista, setCuidadorLista] = useState([]);
    const [pacienteLista, setPacienteLista] = useState([]);

    
    var aplicadorDoc = false;
    var aplicadorCuidador = false;



    useEffect(() => {
      Axios.get("http://localhost:3003/verPruebas").then((response) => {
        console.log(response.data);
        setPruebaLista(response.data);
      });
  
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3003/verCuidadores").then((response) => {
          console.log(response.data);
          setCuidadorLista(response.data);
        });
    
      }, []);

      useEffect(() => {
        Axios.get("http://localhost:3003/verPacientes").then((response) => {
          console.log(response.data);
          setPacienteLista(response.data);
        });
    
      }, []);

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
    <body> <Link to="/menuDoctor"> <button className="izquierda"> Volver a menú </button> </Link> </body>

      </nav>
      <Outlet />
      <br></br>


       <h1 className="Titulos"> PRUEBAS REGISTRADAS </h1>
       <br />


       {pruebaLista.map((val)=> {
          return <div> 
            <h3> ID de la prueba {val.idPrueba} | Id del paciente al que se le aplicó: {val.pacientePrueba} | Fecha en la que se aplico: {val.fechaPrueba} | Puntaje de la prueba: {val.puntajePrueba} | comentariosExtra: {val.comentariosExtra} </h3>  

            {pacienteLista.map((val2)=> {
              if (val.pacientePrueba === val2.idPaciente){
                 return <div>
              <body> Nombre del paciente: {val2.nombrePaciente} {val2.apellidoP} {val2.apellidoM} </body>
              <hr></hr>
              
              
              </div>
              }

               
          
           })}
                
              </div> 
            })}

         

        
          

       <br />
    </div>
  );
}