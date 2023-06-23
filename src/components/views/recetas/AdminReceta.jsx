import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReceta, leerRecetas } from "../../helpers/queries";

const AdminReceta = ({ receta, setRecetas }) => {
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
            borrarReceta(receta.id).then((respuesta)=>{
                if(respuesta && respuesta.status === 200){
                    Swal.fire(
                        'Se ha ido!',
                        `La receta de ${receta.nombre} se ha borrado`,
                        'success'
                      )
                      leerRecetas().then((respuesta) => {
                        if (respuesta) {
                          setRecetas(respuesta);
                        }
                      });
                }else{
                    Swal.fire(
                        'Oh no! Algo salio mal...',
                        `La receta de ${receta.nombre} no se ha borrado`,
                        'error'
                      )
                }
            })

        }
      })
  }
  return (
    <tr>
      <td>{receta.id}</td>
      <td>{receta.nombre}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.instrucciones}</td>
      <td className="d-flex flex-columns flex-wrap justify-content-center">
        <Link className="btn btn-warning w-75" to={'/admin/editar-receta/'+receta.id}>Editar</Link>
        <Button className="w-75" variant="danger" onClick={eliminarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default AdminReceta;