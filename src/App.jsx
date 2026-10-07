import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Contacto } from "./pages/Contacto";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { DetalleProducto } from "./pages/DetalleProducto";

function App() {
  return (
    <>
      <section className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/detalleproducto/:id" element={<DetalleProducto/>}/>
          </Routes>
        </main>
        <Footer />
      </section>
    </>
  );
}

export default App;
