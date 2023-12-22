import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ( {productos, titulo} ) => {
    return (
        <div>
            <h2 className="titulo-principal">Estas En El Apartado De {titulo}</h2>
            <div className="lista-cards">
                { productos.length > 0 && productos.map((producto) => {
                       return (
                            <Item key={producto.id} producto={producto}/>
                       )
                    })
                } 
            </div>
        </div>
    )
};

export default ItemList;