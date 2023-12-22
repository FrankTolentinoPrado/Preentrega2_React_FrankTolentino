import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ( {item} ) => {

    
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad-1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad+1)
    }

    const handleAgregar = () =>{ 
        console.log( {...item, cantidad} )
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
                    <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;