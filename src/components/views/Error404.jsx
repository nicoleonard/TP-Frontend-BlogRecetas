import { Container,Image } from "react-bootstrap";

const Error404 = () => {
    return(
        <>
        <Container className="text-center pt-5">
            
            <h1>Pagina no encontrada</h1>
            <h2 className="text-secondary">Error404</h2>
            <h3 className="text-secondary opacity-50">oops...</h3>
            

        </Container>
        </>
    );
};

export default Error404