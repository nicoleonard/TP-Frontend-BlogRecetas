import {Routes, Route} from "react-router-dom"
import AdminUsuarios from "../views/AdminUsuarios";
// import AgregarReceta from "../views/recetas/AgregarReceta";
// import EditarReceta from "../views/recetas/EditarReceta";
const RutasAdminUsuarios = () => {
    return (
        <>
        <Routes>
            <Route exact path="/" element={<AdminUsuarios></AdminUsuarios>}></Route>
            {/* <Route exact path="/agregar-receta" element={<AgregarReceta></AgregarReceta>}></Route>  
            <Route exact path="/editar-receta/:id" element={<EditarReceta></EditarReceta>}></Route>  */}
        </Routes>

        </>
    );
};

export default RutasAdminUsuarios;