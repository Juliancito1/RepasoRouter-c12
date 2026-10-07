import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    try {
      const obtenerProductos = async () => {
        const respuesta = await fetch("https://devsapihub.com/api-fast-food");
        const datos = await respuesta.json();
        console.log(datos);
        setProductos(datos);
      };
      obtenerProductos();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <div className="pb-8">
        <section className="relative mx-auto min-h-72  overflow-hidden bg-slate-900 md:min-h-96">
          <img
            src="https://cdn.mobygames.com/1eb28760-ac06-11ed-a599-02420a000132.webp"
            alt="Imagen cafeteria"
            className="absolute inset-0 h-full w-full object-fill opacity-60"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="relative flex min-h-72 items-end px-6 py-8 md:min-h-96 md:px-12 md:py-12">
            <div className="max-w-xl text-white">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-300">
                Nuestra cafeteria
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
                Descubre nuestros productos
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Explora nuestra catalogo de productos.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <h2 className="text-3xl text-center">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3">
          {productos && productos.map((producto) => (
            <Card key={producto.id} producto={producto}/>
          ))}
        </div>
      </div>
    </>
  );
};
