import cart from './assets/shopping-cart.png'
import { useState } from "react";
const CartWidget= () => {
    
    const [number, setNumber] = useState(0);


    const sumar = () => {
        setNumber(number + 1);
        
    }

    const restar = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <img src={cart} alt= "cart-widget"/>
            {number}

            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    )
};

export default CartWidget;