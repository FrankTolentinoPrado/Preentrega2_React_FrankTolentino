import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";

const ItemDetail = ( {item} ) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);

    
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad+1)
    }

    return (
        <div className="container-detalle">
            <div>
                <img src={item.image} alt={item.title} />
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <p>categoria: {item.category}</p>
                    <ItemCount 
                    cantidad={cantidad} 
                    handleSumar={handleSumar} 
                    handleRestar={handleRestar} 
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                    />
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;