import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./components/views/Inicio"
import Admin from "./components/views/Admin"
import Detalles from "./components/views/Detalles"
import Error404 from "./components/views/Error404"
import Footer from "./components/common/Footer"
import Menu from "./components/common/Menu"
import { Container } from "react-bootstrap"

function App() {

  return (
    <>
      <BrowserRouter>
        <Container fluid="true" as="header" className="w-100">
          <Menu></Menu>
        </Container>
        <Container fluid="true" as="main" className="min-vh-100 m-0">
          <Routes>
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route exact path="/admin" element={<Admin></Admin>}></Route>
            <Route exact path="/detalles" element={<Detalles></Detalles>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </Container>
        <Footer></Footer>
      </BrowserRouter>
    </>


  )
}

export default App
