import "./Item.css"

const Item = ( {producto} ) => {
    return (
        <div className="itemcard">
            <img src={producto.image} alt={producto.title}/>
            <h2>{producto.title}</h2>
            <p>${producto.price}</p>
            <p>{producto.description}</p>
            <a className="ver-mas" href={`/item/${producto.id}`}>Ver más</a>
        </div> 
    )
};

export default Item;