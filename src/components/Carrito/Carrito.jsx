import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Carrito.css"; 
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="carrito-container">
      <h2 className="cart-title">Carrito</h2>
      {carrito.map((prod) => (
        <div key={prod.id} className="cart-item">
          <img src={prod.image} className="cart-item-image" />
          <div className="item-details">
            <h3 className="item-name">{prod.title}</h3>
            <p>Precio unitario: ${prod.price}</p>
            <p>Precio total: ${prod.price * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
          </div>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2 className="cart-title">Precio total: ${precioTotal()} </h2>
          <button className="btn-vaciar" onClick={handleVaciar}>
            Vaciar Carrito
          </button>
          <Link to="/checkout" className="btn-finalizar">
            Finalizar compra
          </Link>
        </>
      ) : (
        <h2>El carrito está vacío</h2>
      )}
    </div>
  );
};

export default Carrito;