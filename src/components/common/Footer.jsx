import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <>
                <Container fluid="true" as="footer" className='w-100 bg-success p-5 m-0'>
                    <Row>
                        <Col className="text-center">&copy; Todos los derechos reservados</Col>
                    </Row>
                </Container>
        </>
    )
}


export default Footer