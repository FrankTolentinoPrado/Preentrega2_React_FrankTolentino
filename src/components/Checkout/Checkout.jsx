import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Checkout.css"; // Agrega un archivo CSS para estilos adicionales

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
      });
  };

  if (pedidoId) {
    return (
      <div className="container-checkout">
        <h1 className="gracias-title">
          Muchas gracias por tu compra y por confiar en nosotros
        </h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="container checkout-container">
      <h1 className="main-title">Finalizar Compra</h1>
      <form id="form" autoComplete="off" onSubmit={handleSubmit(comprar)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Tu Nombre"
            className="campo"
            {...register("nombre", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Tu Email"
            className="campo"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Tu Telefono"
            className="campo"
            {...register("telefono", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="DNI"
            className="campo"
            {...register("dni", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Número de Tarjeta"
            className="campo"
            {...register("numeroTarjeta", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Fecha de Vencimiento"
            className="campo"
            {...register("fechaVencimiento", { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="CCV"
            className="campo"
            {...register("ccv", { required: true })}
          />
        </div>
        <button type="submit" className="btn-comprar">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default Checkout;