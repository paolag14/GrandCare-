const express = require('express')
const axios = require ("axios");
const cors = require("cors");
var mysql = require('mysql');
const app = express()
const port = 3003

const bodyParser = require ("body-parser");

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Grandcare",
  //database: "intento_reto",
  //password: "Hrv2002.,."
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/agregarCuidador", (req, res) => {
    const idCuidadorCuidador = req.body.idCuidadorCuidador;
    const nombreCuidadorCuidador = req.body.nombreCuidadorCuidador;
    const apellidosCuidadorCuidador = req.body.apellidosCuidadorCuidador;
    const telefonoCuidadorCuidador = req.body.telefonoCuidadorCuidador;
    const relacionPacienteCuidador = req.body.relacionPacienteCuidador;
    const correoCuidador = req.body.correoCuidador;
    const contraseñaCuidador = req.body.contraseñaCuidador;

    const sqlInsert = "INSERT INTO cuidador (nombreCuidador, apellidosCuidador, telefonoCuidador, relacionPaciente, correo, contraseña) VALUES (?, ?, ?, ?, ?, ?)";
    con.query(sqlInsert, [nombreCuidadorCuidador, apellidosCuidadorCuidador, telefonoCuidadorCuidador, relacionPacienteCuidador, correoCuidador, contraseñaCuidador], (err, result)=>{
        console.log(result);
        console.log("Registro de cuidador exitoso");

    });
});


app.get('/verCuidadores', (req, res) => {
    const sqlSelect = "SELECT * FROM cuidador";
    con.query(sqlSelect, (err, result) => {
       //console.log(result);
       res.send(result);
     });
 });

 app.get('/verPacientes', (req, res) => {
  const sqlSelect = "SELECT * FROM paciente";
  con.query(sqlSelect, (err, result) => {
     //console.log(result);
     res.send(result);
   });
});

app.post("/subirPrueba", (req, res) => {
  const idPruebaPrueba = req.body.idPruebaPrueba;
  const pacientePruebaPrueba = req.body.pacientePruebaPrueba;
  const idAplicadorDoctorPrueba= req.body.idAplicadorDoctorPrueba;
  const idAplicadorCuidadorPrueba = req.body.idAplicadorCuidadorPrueba;
  const fechaPruebaPrueba = req.body.fechaPruebaPrueba;
  const puntajePruebaPrueba = req.body.puntajePruebaPrueba;
  const comentariosExtraPrueba = req.body.comentariosExtraPrueba;
  
  const sqlInsert = "INSERT INTO prueba (idPrueba, pacientePrueba, idAplicadorDoctor, idAplicadorCuidador, fechaPrueba, puntajePrueba, comentariosExtra) VALUES (?, ?, ?, ?, ?, ?, ?)";
  con.query(sqlInsert, [idPruebaPrueba, pacientePruebaPrueba, idAplicadorDoctorPrueba, idAplicadorCuidadorPrueba, fechaPruebaPrueba, puntajePruebaPrueba, comentariosExtraPrueba], (err, result)=>{
      console.log(result);
      console.log("Registro prueba exitoso");
      console.log(err);

  });
});


app.get('/verPruebas', (req, res) => {
  const sqlSelect = "SELECT * FROM prueba";
  con.query(sqlSelect, (err, result) => {
     //console.log(result);
     res.send(result);
   });
});

 app.post("/agregarPaciente", (req, res) => {
  const idPacientePaciente = req.body.idPacientePaciente;
  const responsablePaciente = req.body.responsablePaciente;
  const nombrePacientePaciente = req.body.nombrePacientePaciente;
  const apellidoPPaciente = req.body.apellidoPPaciente;
  const apellidoMPaciente = req.body.apellidoMPaciente;
  const padecimientosPaciente = req.body.padecimientosPaciente;
  const telefonoContactoPaciente = req.body.telefonoContactoPaciente;
  const sexoPaciente = req.body.sexoPaciente;
  const fechaNacimientoPaciente = req.body.fechaNacimientoPaciente;
  const quejaMemoriaPaciente = req.body.quejaMemoriaPaciente;


  const sqlInsert = "INSERT INTO paciente (responsable, nombrePaciente, apellidoP, apellidoM, padecimientos, telefonoContacto, sexo, fechaNacimiento, quejaMemoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  con.query(sqlInsert, [responsablePaciente, nombrePacientePaciente, apellidoPPaciente, apellidoMPaciente, padecimientosPaciente, telefonoContactoPaciente, sexoPaciente, fechaNacimientoPaciente, quejaMemoriaPaciente], (err, result)=>{
      console.log(result);
      console.log("Registro paciente exitoso");

  });
});



app.get('/verDoctores', (req, res) => {
  const sqlSelect = "SELECT * FROM DOCTOR";
  con.query(sqlSelect, (err, result) => {
     //console.log(result);
     res.send(result);
   });
});

app.post(`/agregarDoctor`, (req, res) => {
  const idDoctorDoctor = req.body.idDoctorDoctor;
  const idPacienteDoctor = null;
  const nombreDoctorDoctor = req.body.nombreDoctorDoctor;
  const apellidosDoctorDoctor = req.body.apellidosDoctorDoctor;
  const organizacionDoctor = req.body.organizacionDoctor;
  const correoDoctor = req.body.correoDoctor;
  const contraseñaDoctor = req.body.contraseñaDoctor;
  
  const sqlInsert = "INSERT INTO DOCTOR (idPacientes, nombreDoctor, apellidosDoctor, organizacion, correo, contraseña) VALUES (?, ?, ?, ?, ?, ?)";
  con.query(sqlInsert, [idPacienteDoctor, nombreDoctorDoctor, apellidosDoctorDoctor, organizacionDoctor, correoDoctor, contraseñaDoctor], (err, result)=>{
      console.log(result);
      console.log("Registro doctor exitoso");
      //console.log(err);

  });
});


app.get('/credencialesDoctores', (req, res) => {
  const sqlSelect = "SELECT correo, contraseña FROM doctor";
  con.query(sqlSelect, (err, result) => {
     //console.log(result);
     res.send(result);
   });
});

app.get('/credencialesCuidadores', (req, res) => {
  const sqlSelect = "SELECT correo, contraseña FROM cuidador";
  con.query(sqlSelect, (err, result) => {
     //console.log(result);
     res.send(result);
   });
});

app.get('/buscarPaciente', (req, res) => {
   const sqlSelect = "SELECT * FROM paciente WHERE nombrePaciente = ${req} OR apellidoP = ${req} or apellidoM = ${req}" ;
   con.query(sqlSelect, (err, result) => {
      console.log(result);
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})