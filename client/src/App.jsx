// Ejemplo C.R.U.D con react,node y mysql. Aplicacion para checkear si los usuarios registrados en el sistema les corresponde o no caja navideña.
// Va a contar con dos paginas. Una es el login y otra es el menu donde se encuentra la tabla junto a todas las opciones

// Instalo ReactRouterDom 

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Menu from "./views/menu";



function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
   </Router>
  );
}

export default App;
