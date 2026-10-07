import { useEffect, useState } from "react";
import { useParams } from "react-router"


export const DetalleProducto = () => {
  const { id } = useParams()

  const [producto, setProducto] = useState(null);
  
    useEffect(() => {
      try {
        const obtenerProducto = async () => {
          const respuesta = await fetch(`https://devsapihub.com/api-fast-food/${id}`);
          const dato = await respuesta.json();
          console.log(dato);
          setProducto(dato);
        };
        obtenerProducto();
      } catch (error) {
        console.error(error);
      }
    }, [id]);

    console.log(producto)

  console.log(id)

  return (
    <div></div>
  )
}
