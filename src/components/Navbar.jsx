import { NavLink } from "react-router"

export const Navbar = () => {
  return (
    <header className="bg-amber-200 p-3 flex justify-between items-center">
      <div>
        <h1 className="text-3xl">Cafeteria</h1>
      </div>
      <div>
        <NavLink to={'/'} className="me-3 text-slate-800">Inicio</NavLink>
        <NavLink to={'/contacto'}  className="text-slate-800">Contacto</NavLink>
      </div>
    </header>
  )
}
