import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ( {item} ) => {
    return (
        <div className="container-detalle">
            <div>
                <img src={item.image} alt={item.title} />
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>${item.price}</p>
                    <p>categoria: {item.category}</p>
                    <ItemCount/>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail;