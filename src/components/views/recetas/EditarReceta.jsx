import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { editarReceta, leerReceta } from "../../helpers/queries";


const EditarReceta = () => {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const { id } = useParams();

    useEffect(() => {
        leerReceta(id).then((respuesta) => {
            setValue('nombre', respuesta.nombre)
            setValue('ingredientes', respuesta.ingredientes)
            setValue('instrucciones', respuesta.instrucciones)
        })
    }, [])

    const onSubmit = (recetaEditada) => {
        console.log(recetaEditada);
        editarReceta(recetaEditada, id).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
                Swal.fire('Receta editada', `La receta de ${recetaEditada.nombre} fue modificada en el Libro de recetas`, 'success');
                reset();
            } else {
                Swal.fire('Oops... algo salio mal', `La receta ${recetaEditada.nombre} no se modificó :( quizás luego`, 'error');
            }
        });

    };

    return (
        <Container>
            <h1 className="display-4 mt-5">Editar receta</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Merengue"
                        {...register("nombre", {
                            required: "El nombre de la receta es requerido", minLength: { value: 5, message: "El nombre de la receta debe tener al menos 5 caracteres" }, maxLength: { value: 100, message: "El nombre de la receta puede tener como maximo 100 caracteres" },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombre?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Claras de huevo, azucar, agua..."
                        {...register("ingredientes", {
                            required: "Los ingredientes de la receta son requeridos", pattern: { value: /^[A-Za-z\s]+(?:\s*,\s*[A-Za-z]+)*$/g, message: 'La lista de ingredientes debe ser palabras separadas por ","' }, minLength: { value: 4, message: "La lista de ingredientes debe tener al menos 4 caracteres" }, maxLength: { value: 100, message: "La lista de ingredientes puede tener como maximo 100 caracteres" }
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.ingredientes?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Instrucciones</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Se baten las claras de huevo a punto de nieve..."
                        {...register("instrucciones", {
                            required: "Las instrucciones son requeridas", minLength: { value: 12, message: "La lista de instrucciones debe tener al menos 12 caracteres" }, maxLength: { value: 200, message: "La lista de instrucciones puede tener como maximo 200 caracteres" },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.instrucciones?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
};

export default EditarReceta;