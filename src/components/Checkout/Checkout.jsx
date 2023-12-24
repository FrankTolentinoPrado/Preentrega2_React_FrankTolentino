import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
      const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
      }
      console.log(pedido);

      const pedidosRef = collection(db, "pedidos")

      addDoc(pedidosRef, pedido)
          .then((doc) => {
              setPedidoId(doc.id)
              vaciarCarrito();
          })
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="gracias-title">Muchas gracias por tu compra y por confiar en nosotros</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar Compra</h1>
            <form id="form" autoComplete="off" onSubmit={handleSubmit(comprar)}>
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className="campo"
                  {...register("nombre", { required: true })}
                />
                <input
                  type="email"
                  placeholder="Tu Email"
                  className="campo"
                  {...register("email", { required: true })}
                />
                <input
                  type="tel"
                  placeholder="Tu Telefono"
                  className="campo"
                  {...register("telefono", { required: true })}
                />
      
                <button type="submit" className="btn-enviar">
                  Comprar
                </button>
            </form>    

        </div>
    )
}

export default Checkout