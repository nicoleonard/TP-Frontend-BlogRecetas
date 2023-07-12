import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
    const navegacion = useNavigate()

    const logout = () => {
        sessionStorage.removeItem('usuario')
        setUsuarioLogeado({})
        navegacion("/")
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-success">
                <Container>
                    <Navbar.Brand as={Link} to='/'> <i className="bi bi-clipboard2-heart-fill"></i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink end to="/" className={'nav-item nav-link'}>Recetas</NavLink>
                            {
                                (usuarioLogeado.usuario && usuarioLogeado.tipo === "admin") ?
                                    <>
                                        <NavLink end to="/admin" className={'nav-item nav-link'}>Admin</NavLink>
                                        <Button className={'nav-item nav-link'} variant='primary' onClick={logout}>Logout</Button>
                                    </> :
                                    (usuarioLogeado.usuario && usuarioLogeado.tipo === "usuario") ?
                                        <Button className={'nav-item nav-link'} variant='primary' onClick={logout}>Logout</Button> : <NavLink end to="/login" className={'nav-item nav-link'}>Login</NavLink>
                            }
                            {
                                (!usuarioLogeado.usuario) ? <NavLink end to="/registro" className={'nav-item nav-link'}>Registrarse</NavLink> : <></>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu