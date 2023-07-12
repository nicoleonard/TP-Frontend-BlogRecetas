import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
   const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
   //voy a preguntar si el usuarioLogueado esta vacio
   if(!usuarioLogueado){

    return <Navigate to={'/login'}></Navigate>
   }else{
    //si estoy logueado
    if(usuarioLogueado.tipo !== "admin"){
        return <Navigate to={'/'}></Navigate>
    }
    return children;
   }
};

export default RutasProtegidas;