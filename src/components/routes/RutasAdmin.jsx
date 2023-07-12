import { Routes, Route } from "react-router-dom"
import Admin from "../views/Admin";
import AgregarReceta from "../views/recetas/AgregarReceta";
import EditarReceta from "../views/recetas/EditarReceta";
const RutasAdmin = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Admin></Admin>}></Route>
                <Route exact path="/agregar-receta" element={<AgregarReceta></AgregarReceta>}></Route>
                <Route exact path="/editar-receta/:id" element={<EditarReceta></EditarReceta>}></Route>
            </Routes>

        </>
    );
};

export default RutasAdmin;