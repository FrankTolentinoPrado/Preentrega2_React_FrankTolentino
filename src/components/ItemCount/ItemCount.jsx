import React, { useState } from "react";
import "./ItemCount.css"

const ItemCount = () => {

    const [cantidad, setCantidad] = useState(1);

    return (
        <div>


        <div className="item-count">
            <button>-</button>
            <p>{cantidad}</p>
            <button>+</button>
        </div>
        <button className="agregar-producto-al-carrito">Agregar al carrito</button>

        </div>
    )
}

export default ItemCount