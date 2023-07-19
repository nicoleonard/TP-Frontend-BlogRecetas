import {Routes, Route} from "react-router-dom"
import AdminRecetas from "../views/AdminRecetas";
import AgregarReceta from "../views/recetas/AgregarReceta";
import EditarReceta from "../views/recetas/EditarReceta";
const RutasAdminRecetas = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<AdminRecetas></AdminRecetas>}></Route>
            <Route exact path="/agregar-receta" element={<AgregarReceta></AgregarReceta>}></Route>  
            <Route exact path="/editar-receta/:id" element={<EditarReceta></EditarReceta>}></Route> 
        </Routes>

        </>
    );
};

export default RutasAdminRecetas;