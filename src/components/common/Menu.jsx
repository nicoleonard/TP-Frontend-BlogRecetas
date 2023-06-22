import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink } from 'react-router-dom';

const Menu = ({usuarioLogeado, setUsuarioLogeado}) => {

    const logout = () => {
        sessionStorage.removeItem('usuario')
        setUsuarioLogeado({})
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-success">
                <Container>
                    <Navbar.Brand as={Link} to='/'> icono </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink end to="/" className={'nav-item nav-link'}>Recetas</NavLink>
                            {
                                usuarioLogeado.usuario?
                                <>
                                <NavLink end to="/admin" className={'nav-item nav-link'}>Admin</NavLink>
                                <Button className={'nav-item nav-link'} variant='primary' onClick={logout}>Logout</Button>
                                </>:<NavLink end to="/login" className={'nav-item nav-link'}>Login</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu