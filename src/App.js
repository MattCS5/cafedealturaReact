import './App.css';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Shop from "./pages/Shop.jsx";
import BagShop from "./pages/BagShop.jsx";
import Suscripcion from "./pages/Suscripcion.jsx";
import ParaEmpresas from "./pages/ParaEmpresas.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";
import Contcto from "./pages/Contcto.jsx";
import Telefono from "./pages/Telefono.jsx";
import IniciarSesion from "./pages/IniciarSesion.jsx";
import Copyright from './components/Copyright.jsx';
import PloticaDePrivacidad from './pages/PloticaDePrivacidad.jsx';
import PoliticaCookies from './pages/PoliticaCookies.jsx';
import TerminosCondiciones from './pages/TerminosCondiciones.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/suscripcion" element={<Suscripcion/>}/>
      <Route path="/paraEmpresas" element={<ParaEmpresas/>} />
      <Route path="/sobreNosotros" element={<SobreNosotros/>} />
      <Route path="/contacto" element={<Contcto/>}/>
      <Route path="/telefono" element={<Telefono/>}/>
      <Route path="/bagShop" element={<BagShop/>}/>
      <Route path="/inciarSesion" element={<IniciarSesion/>}/>
      <Route path="/politicaPrivacidad" element={<PloticaDePrivacidad/>}/>
      <Route path="/politicaCookies" element={<PoliticaCookies/>}/>
      <Route path="/terminosCondiciones" element={<TerminosCondiciones/>}/>

      
    </Routes>
    <Copyright/>
  </BrowserRouter>
  );
}

export default App;
