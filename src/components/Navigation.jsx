import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CakeIcon from "@mui/icons-material/Cake";

const Navigation = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Link to="/" className="text-white text-decoration-none d-flex align-items-center">
                        <HomeIcon />
                        <span className="ms-1">Home</span>
                    </Link>

                    <Link to="/contacto" className="text-white ms-3 text-decoration-none d-flex align-items-center">
                        <ContactPageIcon />
                        <span className="ms-1">Contacto</span>
                    </Link>
                </div>

                <Navbar.Brand className="d-flex align-items-center">
                    <span>Happy Cake</span>
                    <CakeIcon className="ms-2" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Navigation;
