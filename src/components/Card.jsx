import { NavLink } from "react-router";

export const Card = ({ producto }) => {
  return (
    <article className="my-4 max-w-80 overflow-hidden rounded-2xl bg-amber-300 text-slate-950 shadow-lg">
      <img
        src={producto.image}
        alt={`Producto`}
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mt-1 text-xl font-bold">{producto.name}</h3>
        <p className="mt-2 text-xl uppercase">{producto.category}</p>
        <p className="mt-2 text-xl font-bold">Precio: ${producto.price}</p>
        <div className="mt-4 flex justify-end">
          <NavLink
            to={`/detalleProducto/${producto.id}`}
            className="rounded-2xl bg-cyan-800 px-4 py-2 font-semibold text-white transition hover:bg-cyan-950"
          >
            Ver más
          </NavLink>
        </div>
      </div>
    </article>
  );
};
