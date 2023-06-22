import { Card } from "react-bootstrap"

const ListaReceta = ({ receta }) => {

    return (
        <>
            <Card className="px-0">
                <Card.Header>
                    <h3 className="text-truncate">{receta.nombre}</h3>
                </Card.Header>
                <Card.Body>
                    <h6>Instrucciones</h6>
                    <p className="text-wrap">{receta.instrucciones}</p>

                </Card.Body>
                <Card.Footer>
                    <h6>Ingredientes</h6>
                    <p>{receta.ingredientes}</p>
                </Card.Footer>
            </Card>
            {console.log(receta.nombre)}
        </>
    )

}

export default ListaReceta