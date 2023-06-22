import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminReceta = ({ receta }) => {
  
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombre}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.instrucciones}</td>
      <td>
        <Link className="btn btn-warning" to={'/admin/editar-receta/'+receta.id}>Editar</Link>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default AdminReceta;