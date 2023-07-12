import { Container, Image } from "react-bootstrap";

const Error404 = () => {
    return (
        <>
            <Container className="text-center pt-5">
                <Image src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg"></Image>
                <h1>Pagina no encontrada</h1>
                <h2 className="text-secondary">Error404</h2>
                <h3 className="text-secondary opacity-50">oops...</h3>
            </Container>
        </>
    );
};

export default Error404