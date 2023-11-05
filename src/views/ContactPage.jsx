import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

function ContactPage() {
    return (
        <Form className="my-form">
            <Container className="pt-2">
                <h4 className="mb-4">Tienes dudas con alguno de nuestros ricos pasteles? Escríbenos y te respondemos a la brevedad.</h4>
            </Container>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Tu Correo</Form.Label>
                <Form.Control type="email" placeholder="tucorreo@ejemplo.cl" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Tu consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="danger">Enviar</Button>{" "}
        </Form>
    );
}

export default ContactPage;
