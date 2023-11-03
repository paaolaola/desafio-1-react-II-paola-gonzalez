import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const TopBar = () => {
    return (
        <>
            <Navbar className="custom-navbar" style={{ backgroundColor: "#FAE8EB" }}>
                <Container className="d-flex justify-content-center align-items-center" style={{ fontSize: "15px", color: "#474747", height: "100%" }}>
                    ⏰ Horario Atención: Lunes a Sábado de 10:30 a 19:30 hrs. / Domingos de 11:00 a 16:00 hrs.
                </Container>
            </Navbar>
        </>
    );
};

export default TopBar;
