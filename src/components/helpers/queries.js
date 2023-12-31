const URL_usuarios = import.meta.env.VITE_API_USUARIO
const URL_recetas = import.meta.env.VITE_API_RECETA

export const login = async (usuario) => {
    try {
        const respuesta = await fetch(URL_usuarios);
        const listaUsuarios = await respuesta.json()

        const solicitudLogin = listaUsuarios.find((usuarioRegistrado) => usuarioRegistrado.usuario === usuario.usuario)
        if (solicitudLogin) {
            if (solicitudLogin.clave === usuario.clave) {
                return solicitudLogin
            }
        } else {
            return null
        }

    } catch (error) {

    }

}

export const logout = () => {
    sessionStorage.removeItem('usuario')
}

export const leerUsuarios = async () => {
    try {
        const respuesta = await fetch(URL_usuarios);
        const recetas = await respuesta.json();
        return recetas;
    } catch (error) {
        console.log(error)
    }
}

export const agregarUsuario = async (usuario)=>{
    try{
        usuario.tipo = "usuario"
        const respuesta = await fetch(URL_usuarios, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(usuario) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const borrarUsuario = async (id)=>{
    try{
        const respuesta = await fetch(URL_usuarios+"/"+id,{method:"DELETE"});
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const leerRecetas = async () => {
    try {
        const respuesta = await fetch(URL_recetas);
        const recetas = await respuesta.json();
        return recetas;
    } catch (error) {
        console.log(error)
    }
}

export const leerReceta = async (id) => {
    try {
        const respuesta = await fetch(URL_recetas + "/" + id);
        const receta = await respuesta.json();
        return receta;
    } catch (error) {
        console.log(error)
    }
}

export const agregarReceta = async (receta) => {
    try {
        const respuesta = await fetch(URL_recetas, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(receta) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const editarReceta = async (receta, id) => {
    try {
        const respuesta = await fetch(URL_recetas + "/" + id, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(receta) });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

export const borrarReceta = async (id) => {
    try {
        const respuesta = await fetch(URL_recetas + "/" + id, { method: "DELETE" });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}


