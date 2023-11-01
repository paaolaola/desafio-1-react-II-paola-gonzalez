import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <Container className="pt-5">
            <h4 className="mb-4">La ruta que intentas consultar no existe ⚠️</h4>
        </Container>
    );
}
export default NotFound;
