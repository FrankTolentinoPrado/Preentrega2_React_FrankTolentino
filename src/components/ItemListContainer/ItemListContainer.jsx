import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import pedirProductos from "../helpers/pedirProductos";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const category = useParams().category;

    useEffect(() => {
        pedirProductos()      
            .then((res) => {
                if (category){
                    setProductos( res.filter((prod) => prod.category === category ) );
                    setTitulo(category)
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            })
    }, [category])


    return (
        <div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
};

export default ItemListContainer;