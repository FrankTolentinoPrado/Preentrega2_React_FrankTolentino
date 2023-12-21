import cart from './assets/shopping-cart.png'
import { useState } from "react";

const CartWidget= () => {
    
    const [number] = useState(0);
    
    return (
        <div>
            <img src={cart} alt= "cart-widget"/>
            {number}
        </div>
    )
};

export default CartWidget;