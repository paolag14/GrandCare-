import { render } from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import IniciarSesion from "./routes/iniciarSesion";
import MenuCuidador from "./routes/menuCuidador";
import MenuDoctor from "./routes/menuDoctor";
import Registro from "./routes/registro";
import RegistroCuidador from "./routes/registroCuidador";
import RegistroDoc from "./routes/registroDoc";
import RegistroPaciente from "./routes/registroPacienteCuidador";
import RegistroPacienteDoc from "./routes/registroPacienteDoc";
import VerPacientes from "./routes/verPaciente";
import VerCuidadores from "./routes/verCuidadores";
import RegistroPacienteCuidador from "./routes/registroPacienteCuidador";
import Prueba from "./routes/pruebaUnityCuidador"
import PruebaDoctor from "./routes/pruebaUnityDoctor";
import PruebaCuidador from "./routes/pruebaUnityCuidador";
import VerDoctores from "./routes/verDoctores";
import VerPruebas from "./routes/verPruebas";


//import Prueba from "./routes/pruebaUnity"

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
<Routes>
<Route> path
</Route>
<Route path="/" element={<IniciarSesion />}>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>No se encontró la página</p>
        </main>
      }
    />
      </Route>


<Route path="/registro" element={<Registro />}>
</Route>

<Route path="/registro/doctor" element={<RegistroDoc />}>
</Route>

<Route path="/registro/cuidador" element={<RegistroCuidador />}>
</Route>

<Route path="/menuCuidador" element={<MenuCuidador />}>      
</Route>

<Route path="/menuCuidador/registrarPaciente" element={<RegistroPacienteCuidador />}>
</Route>

<Route path="/pruebaCuidador" element={<PruebaCuidador />}>      
</Route>

<Route path="/pruebaDoctor" element={<PruebaDoctor />}>      
</Route>

<Route path="/menuDoctor" element={<MenuDoctor />}>
</Route>

<Route path="/registro/doctor" element={<RegistroDoc />}>
</Route>
<Route path="/registro/cuidador" element={<RegistroCuidador />}>
</Route>
<Route path="/menuDoctor/registrarPaciente" element={<RegistroPacienteDoc />}>
</Route>
<Route path="/menuDoctor/verPacientes" element={<VerPacientes />}>
</Route>
<Route path="/menuDoctor/verCuidadores" element={<VerCuidadores />}>
</Route>
<Route path="/menuDoctor/verDoctores" element={<VerDoctores />}>
</Route>
<Route path="/menuDoctor/verPruebas" element={<VerPruebas />}>
</Route>

    </Routes>
</BrowserRouter>,rootElement);