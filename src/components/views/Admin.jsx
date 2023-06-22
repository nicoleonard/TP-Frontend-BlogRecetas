import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { leerRecetas } from "../helpers/queries";
import AdminReceta from "./recetas/AdminReceta";

const Admin = () => {
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
        <Container fluid="true" className="px-5">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h1 className="display-4 ">Lista de recetas</h1>
                <Link className="btn btn-primary" to='/admin/agregar-receta'>
                    Agregar
                </Link>
            </div>
            <hr />
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Indice</th>
                        <th>Nombre</th>
                        <th>Ingredientes</th>
                        <th>Instrucciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recetas.map((receta) => <AdminReceta receta={receta} key={receta.id} setRecetas={setRecetas}></AdminReceta>)
                    }
                </tbody>
            </Table>
        </Container>


    );;
};

export default Admin;