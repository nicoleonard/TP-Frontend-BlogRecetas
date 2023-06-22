const URL_usuario = import.meta.env.VITE_API_USUARIO

const login = async (usuario) => {
    try{
        const respuesta = await fetch(URL_usuario);
        const listaUsuarios = await respuesta.json()

        const solicitudLogin = listaUsuarios.find((usuarioRegistrado)=>usuarioRegistrado.usuario === usuario.usuario)
        console.log(solicitudLogin)
        if(solicitudLogin){
            if(solicitudLogin.clave === usuario.clave){
                console.log("bien logeao")
                return solicitudLogin
            }
        }else{
            console.log("mal logeao")
            return null
        }

    }catch(error){

    }
    
}

export default login


