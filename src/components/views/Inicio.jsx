import { useEffect, useState } from 'react';
import { leerRecetas } from '../helpers/queries';
import ListaReceta from './recetas/ListaReceta';
import { Container } from 'react-bootstrap';


const Inicio = () => {
    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        leerRecetas().then((respuesta) => {
            if (respuesta) {
                setRecetas(respuesta)
            } else {
                Swal.fire('Oops...', 'Intente esta operacion luego', 'error')
            }
        })
    }, [])

    return (
        <>
            <h1 className='text-center'>Lista de recetas de cocina</h1>
            <hr></hr>
            <Container>
                {
                    recetas.map((receta) => <ListaReceta receta={receta} key={receta._id}></ListaReceta>)
                }
            </Container>


        </>
    );
};

export default Inicio;