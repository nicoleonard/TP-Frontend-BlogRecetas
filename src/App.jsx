import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from "./components/views/Inicio"
import { Admin } from "./components/views/Admin"
import { Detalles } from "./components/views/Detalles"
import { Error404 } from "./components/views/Error404"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/admin" element={<Admin></Admin>}></Route>
        <Route exact path="/detalles" element={<Detalles></Detalles>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
