import Unity, { UnityContext } from "react-unity-webgl";
import { Outlet, Link } from "react-router-dom";
import Logo from "./logo.png";
import React, {useState, useEffect} from "react";
import Axios from "axios";

const unityContext = new UnityContext({
  loaderUrl: "build/UnityWebReto.loader.js",
  dataUrl: "build/UnityWebReto.data",
  frameworkUrl: "build/UnityWebReto.framework.js",
  codeUrl: "build/UnityWebReto.wasm",
});


export default function PruebaCuidador(){

  const [idPrueba, setIdPrueba] = useState("");
  const [pacientePrueba, setPacientePrueba] = useState("");
  const [idAplicadorCuidador, setAplicadorCuidador] = "1"; //este se cambia para doctor, ESTE ERA USE STATE
  const [idAplicadorDoctor, setAplicadorDoctor] = "1";
  const [fechaPrueba, setFechaPrueba] = useState("");
  const [puntajePrueba, setPuntajePrueba] = useState("");
  const [comentariosExtra, setComentariosExtra] = useState("");

  const [pruebaLista, setPruebaLista] = useState([]);

  const [buscando, setBuscando] = useState("");
  const [idCuidadorBuscando, setIdCuidadorBuscando] = useState("");

  var correoValido = false;


  const [idCuidadorLista, setIdCuidadorLista] = useState([]);
  const [pacienteLista, setPacienteLista] = useState([]);
  

  const submitPrueba = () => {
    Axios.post('http://localhost:3003/subirPrueba', {
      idPruebaPrueba:idPrueba, 
      pacientePruebaPrueba: pacientePrueba, 
      idAplicadorDoctorPrueba: idAplicadorDoctor,
      idAplicadorCuidadorPrueba: idAplicadorCuidador,
      fechaPruebaPrueba: fechaPrueba,
      puntajePruebaPrueba: puntajePrueba,
      comentariosExtraPrueba: comentariosExtra
      
      }).then(()=>{
        window.alert("Prueba registrada");
        
      })
  };

  useEffect(() => {
    Axios.get("http://localhost:3003/verPruebas").then((response) => {
      console.log(response.data);
      setPruebaLista(response.data);
    });

  }, []);
 
  
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



    return( 
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

      <body> <Link to="/menuCuidador"> <button className="izquierda"> Volver a menú </button> </Link> </body>
     
         
      </nav>
      <Outlet />
      <br></br>

      <h1 className="Titulos"> PRUEBA SARCOPENIA </h1>

      <Unity style={{
            width: "100%",
            height: "110%",
            justifySelf: "center",
            alignSelf: "center",
            display : "inline-block"

        }} 
        unityContext={unityContext}
         />


      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
     
      </nav>

      <Outlet />

        

         <div>
           <br></br>

         <h1 className="Titulos"> REGISTRAR PRUEBA </h1>

         <label>No puede dejar ningún campo vacío (Excepto Comentarios extra)</label>

         <label> Ingrese su correo: (Debe ser su correo registrado) </label>
        <input type="text" buscar="buscar" onChange= {(e) => {
         setBuscando(e.target.value)}}/>
         {idCuidadorLista.map((val)=> {
          var id = 0;
           if (buscando === val.correo){
             id = val.idCuidador;
             correoValido = true;
            return <div> 
            <label> ID de cuidador: </label>
            <input type="text" value = {id} idcuidador="dcuidador" onChange= {(e) => {
              
              setAplicadorCuidador(id)}}/>


        <label> Ingrese ID del paciente relacionado: </label>
       <input type="text" idpaciente="id" onChange= {(e) => {
         
         setPacientePrueba(e.target.value)}}/>
         <h1>IDs de pacientes relacionados </h1>
         {pacienteLista.map((val)=> {
           if (val.responsable == id){
            return <p> <center> ID de paciente: {val.idPaciente} | Nombre: {val.nombrePaciente} {val.apellidoP} {val.apellidoM}</center> </p>
           }
          })}


            </div>

            
           }
          })}
          


         <label> Fecha de prueba (AAAA-MM-DD): </label>
       <input type="text" fecha="fecha" onChange= {(e) => {
         setFechaPrueba(e.target.value)}}/>

        <label> Puntaje de prueba obtenido: (No puede ser menor que 0 o mayor a 10) </label>
       <input type="text" puntaje="puntaje" onChange= {(e) => {
         setPuntajePrueba(e.target.value)}}/>

        <label> Comentarios sobre la prueba: </label>
       <input type="text" comentarios="comentarios" onChange= {(e) => {
         setComentariosExtra(e.target.value)}}/>

        <br></br>
  
        <Link to="/menuCuidador"> <button disabled = { !correoValido || !buscando || !fechaPrueba || !puntajePrueba || puntajePrueba > 10 || puntajePrueba < 0 } onClick={submitPrueba}> Registrar prueba  </button> </Link> 
        
         </div>

    

     </div>
     );
   
}