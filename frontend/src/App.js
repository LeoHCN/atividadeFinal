import TelaCadastroObjeto from "./telas/TelaCadastroObjeto.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaMenu from "./telas/TelaMenu.jsx";
import TelaLogin from "./telas/TelaLogin.jsx";
import Pagina404 from "./telas/Pagina404.jsx";
import { useState, createContext } from "react";

export const ContextoUsuario = createContext();

function App() {
  const [usuario, setUsuario] = useState({
    "email": "teste@teste.com",
    "logado": false
  });
  if (usuario.logado) {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{usuario, setUsuario}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<TelaMenu />} />
              <Route path="/cadastro" element={<TelaCadastroObjeto />} />
              <Route path="/login" element={<TelaLogin />} />
              <Route path="*" element={<Pagina404 />} />
            </Routes>
          </BrowserRouter>
        </ContextoUsuario.Provider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <ContextoUsuario.Provider value={{usuario, setUsuario}}>
          <TelaLogin />
        </ContextoUsuario.Provider>
      </div>
    )
  }

}

export default App;
