// Ejemplo C.R.U.D con react,node y mysql. Aplicacion para checkear si los usuarios registrados en el sistema les corresponde o no caja navideña.
// Va a contar con dos paginas. Una es el login y otra es el menu donde se encuentra la tabla junto a todas las opciones

// Instalo ReactRouterDom

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Menu from "./views/menu";
import Afiliados from "./views/afiliados";
import Error from "./views/error";

function RequireAuth({ children }) {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  if (!username || !email) {
    window.location.href = "/";
  }
  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/menu"
          element={
            <RequireAuth>
              <Menu />
            </RequireAuth>
          }
        />
        <Route
          path="/menu/afiliados"
          element={
            <RequireAuth>
              <Afiliados />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
