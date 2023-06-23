import {Navigate} from "react-router-dom"

const RutasProtegidas = ({children}) => {
    const usuarioLogeado = JSON.parse(sessionStorage.getItem('usuario')) || null

    if(!usuarioLogeado || usuarioLogeado.usuario !=="admin"){
        return <Navigate to={'/login'}></Navigate> 
    }else{
        return children
    }
};

export default RutasProtegidas;