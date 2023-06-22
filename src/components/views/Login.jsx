import { Form, Button, Container, Card } from "react-bootstrap";
import login from "../helpers/queries"
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    login();

    const onSubmit = (usuario) => {
        console.log(usuario)
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
                                {...register('usuario', { required: 'El usuario es necesario' })}
                            />
                            <Form.Text muted>
                                {errors.usuario?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                {...register('clave', { required: 'La contraseña es necesaria' })}
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