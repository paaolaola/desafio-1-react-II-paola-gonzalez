import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <div className="text-center">
                <h1 className="pt-5">
                    Bienvenido a <span className="fw-bold">Happy Cake</span>
                </h1>
                <h6> El hogar de los pasteles felices </h6>
                <h1>🍰</h1>
            </div>
            <section className="section-text">
                <h5>
                    <strong>¡Deléitate con los Increíbles Pasteles de Happy Cake!</strong>
                </h5>
                <p>
                    En el mundo de los postres, hay un lugar que simplemente se roba el show: ¡Happy Cake! Aquí no solo hacemos pasteles, ¡hacemos magia dulce
                    en cada rebanada! ¿Por qué elegir Happy Cake? Bueno, es sencillo: ¡hacemos que cada bocado sea una fiesta!
                </p>

                <p>
                    🧁 <strong>Sabor de Calidad Asegurada:</strong> En Happy Cake, cada mordisco es una explosión de sabores. Con ingredientes de primera
                    calidad y recetas cuidadosamente elaboradas por nosotros, te aseguran que cada pastel es un espectáculo para el paladar.
                </p>

                <p>
                    🥧 <strong>Variedad para Todos los Gustos:</strong> Ya sea para una fiesta, un antojo repentino o un regalo especial, Happy Cake tiene de
                    todo. Desde los clásicos que te hacen retroceder en el tiempo hasta creaciones innovadoras que te sorprenderán, ¡aquí hay un pastel para
                    cada ocasión!
                </p>

                <p>
                    🎂 <strong>Compra con una Sonrisa:</strong> En Happy Cake, no solo te llevas un pastel, te llevas una sonrisa. Con un servicio amigable y
                    atención que te hace sentir como en casa, cada visita es una experiencia especial.
                </p>

                <p>
                    Happy Cake es más que una pastelería, ¡es un viaje de sabores y momentos felices! Cada pastel es una historia de sabor y alegría que anima
                    cualquier día.
                </p>
                <p>¡Elige Happy Cake y dale un toque dulce a tu vida con cada rebanada!</p>
            </section>

            <section>
                <div className="gallery">
                    <div>
                        <img
                            className="cake-image"
                            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image 1"
                        ></img>
                    </div>
                    <div>
                        <img
                            className="cake-image"
                            src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image 2"
                        ></img>
                    </div>
                    <div>
                        <img
                            className="cake-image"
                            src="https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image 3"
                        ></img>
                    </div>
                    <div>
                        <img
                            className="cake-image"
                            src="https://images.unsplash.com/photo-1551879400-111a9087cd86?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image 6"
                        ></img>
                    </div>
                    <div>
                        <img
                            className="cake-image"
                            src="https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image 4"
                        ></img>
                    </div>

                    <div>
                        <img
                            className="cake-image"
                            src="https://images.unsplash.com/photo-1521309918586-feb7aa79a61b?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image 5"
                        ></img>
                    </div>
                </div>
            </section>
        </Container>
    );
};
export default HomePage;
