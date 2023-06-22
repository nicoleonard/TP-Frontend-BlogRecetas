import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReceta } from "../../helpers/queries";

const AdminReceta = ({ receta }) => {
  const eliminarReceta = () =>{
    Swal.fire({
        title: 'Esta a punto de borrar una receta, esta seguro?',
        text: "No hay vuelta atras!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#117700',
        cancelButtonColor: '#ff2255',
        confirmButtonText: 'Si, borrar'
      }).then((result) => {
        if (result.isConfirmed) {
            borrarReceta(receta.id)
          Swal.fire(
            'Se ha ido!',
            'La receta se ha borrado',
            'success'
          )
        }
      })
  }
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombre}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.instrucciones}</td>
      <td>
        <Link className="btn btn-warning" to={'/admin/editar-receta/'+receta.id}>Editar</Link>
        <Button variant="danger" onClick={eliminarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default AdminReceta;