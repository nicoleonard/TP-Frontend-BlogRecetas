import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AgregarReceta = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (nuevaReceta) => {
        console.log(nuevaReceta);

    };

    return (
        <Container>
            <h1 className="display-4 mt-5">Nueva receta</h1>
            <hr />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Sanguche de milanesa"
                        {...register("nombreReceta", {
                            required: "El nombre de la receta es requerido", minLength: { value: 5, message: "El nombre de la receta debe tener al menos 5 caracteres" }, maxLength: { value: 100, message: "El nombre de la receta puede tener como maximo 100 caracteres" },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreReceta?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ingredientes</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Harina, huevos, manteca..."
                        {...register("ingredientes", {
                            required: "Los ingredientes de la receta son requeridos", minLength: { value: 4, message: "La lista de ingredientes debe tener al menos 4 caracteres" }, maxLength: { value: 100, message: "La lista de ingredientes puede tener como maximo 100 caracteres" },
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
                            required: "Las instrucciones son requeridas", minLength: { value: 12, message: "La lista de instrucciones debe tener al menos 12 caracteres" }, maxLength: { value: 100, message: "La lista de instrucciones puede tener como maximo 100 caracteres" },
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

export default AgregarReceta;