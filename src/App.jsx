import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";

import Navigation from "./components/Navigation";

import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import NotFound from "./views/NotFound";
import TopBar from "./components/TopBar";

function App() {
    return (
        <>
            <BrowserRouter>
                <TopBar />
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/contacto" element={<ContactPage />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
