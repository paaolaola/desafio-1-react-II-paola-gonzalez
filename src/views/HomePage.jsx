import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Bienvenido a <span className="fw-bold">Happy Cake</span>
            </h1>
            <h6> El hogar de los pasteles felices </h6>
            <h1>🍰</h1>
        </Container>
    );
};
export default HomePage;
