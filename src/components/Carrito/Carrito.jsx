import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css"; // Asegúrate de tener tu archivo CSS para el carrito

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="carrito-container">
      <h2>Carrito</h2>
      {carrito.map((prod) => (
        <div key={prod.id} className="producto-item">
          <img src={prod.image} alt="image" className="producto-imagen" />
          <div className="producto-info">
            <h3>{prod.title}</h3>
            <p>Precio unitario: ${prod.price}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
          </div>
        </div>
      ))
      }
      {
        carrito.length > 0 ?
        <>
            <h2>Precio total:  ${precioTotal()} </h2>
            <button onClick={handleVaciar}>Vaciar Carrito</button>
        </> :
        <h2>El carrito esta vacio</h2>
      }

    </div>
  );
};

export default Carrito;