import { Form, Button, Container, Card } from "react-bootstrap";
import {login} from "../helpers/queries"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { logout } from "../helpers/queries";


const Login = ({setUsuarioLogeado}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navegacion = useNavigate(); 

    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;


    const onSubmit = (usuario) => {

        if(usuarioLogueado){
            Swal.fire({
                title: 'Hay una sesion activa',
                text: `Está logeado como ${usuario.usuario}. Desea cerrar sesion?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#117700',
                cancelButtonColor: '#ff2255',
                confirmButtonText: 'Si, cerrar sesion.'
              }).then((result) => {
                if (result.isConfirmed) {
                    logout()
                    navegacion("/")
                    Swal.fire(
                    'Sesion finalizada',
                    'Tu sesion se ha cerrado con exito.',
                    'success'
                  )
                }
              })
            
        }else{
            login(usuario).then((respuesta)=>{
                if(respuesta){
                    sessionStorage.setItem('usuario', JSON.stringify(respuesta))
                    setUsuarioLogeado(respuesta);
                    Swal.fire(
                        'Inicio de sesion exitoso',`Bienvenido, ${usuario.usuario}`,
                        'success'
                    )
                    if(usuario.tipo === "admin"){
                        navegacion("/admin")
                    }else{
                        navegacion("/")
                    }
    
                }else{
                    Swal.fire(
                        'Inicio de sesion fallido',
                        'El usuario o clave ingresados son incorrectos',
                        'error'
                    )
                }
            });
        }


    }
    return (
        <Container>
            <Card className="my-5">
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su usuario"
                                {...register('usuario', { required: 'El usuario es necesario', pattern:{value: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/, message:'El nombre de usuario puede tener de 3 a 32 caracteres, debe empezar con una letra, puede contener "-" y "_"'} })}
                            />
                            <Form.Text muted>
                                {errors.usuario?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                {...register('clave', { required: 'La contraseña es necesaria', pattern:{value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/, message: 'La contraseña puede tener de 8 a 64 caracteres y contiene una mezcla de mayusculas y minusculas, un numero y un caracter especial'} })}
                            />
                            <Form.Text muted>
                                {errors.clave?.message}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;