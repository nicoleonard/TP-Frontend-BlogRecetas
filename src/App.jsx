import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./components/views/Inicio"
import Error404 from "./components/views/Error404"
import Footer from "./components/common/Footer"
import Menu from "./components/common/Menu"
import { Container } from "react-bootstrap"
import Login from "./components/views/Login"
import { useState } from "react"
import RutasProtegidas from "./components/routes/RutasProtegidas"
import RutasAdminRecetas from "./components/routes/RutasAdminRecetas"
import RutasAdminUsuarios from "./components/routes/RutasAdminUsuarios"
import Registro from "./components/views/Registro"

function App() {
const [usuarioLogeado, setUsuarioLogeado] = useState(JSON.parse(sessionStorage.getItem('usuario')) || {});
  return (
    <>
      <BrowserRouter>
        <Container fluid="true" as="header" className="w-100">
          <Menu usuarioLogeado={usuarioLogeado} setUsuarioLogeado={setUsuarioLogeado}></Menu>
        </Container>
        <Container fluid="true" as="main" className="min-vh-100 m-0 w-100 pt-2">
          <Routes>
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route exact path="/login" element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}></Route>
            <Route exact path="/registro" element={<Registro></Registro>}></Route>
            <Route exact path="/admin-recetas/*" element={<RutasProtegidas><RutasAdminRecetas></RutasAdminRecetas></RutasProtegidas>}></Route>
            <Route exact path="/admin-usuarios/*" element={<RutasProtegidas><RutasAdminUsuarios></RutasAdminUsuarios></RutasProtegidas>}></Route>
            <Route path="/*" element={<Error404></Error404>}></Route>
          </Routes>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </>


  )
}

export default App
