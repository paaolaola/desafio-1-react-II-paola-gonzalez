import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <Container className="container-message">
            <h4 className="mb-3">La ruta que intentas consultar no existe ⚠️</h4>
        </Container>
    );
}

export default NotFound;
