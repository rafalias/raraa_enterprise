import React from 'react';
import './CheckoutProducts.css';
import {useStateValue} from "./StateProvider";

function CheckoutProducts({id, image, title, price, rating, hideButton}) {

    const[{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
            dispatch({
                type: "REMOVE_FROM_BASKET",
                id: id,
            })
    }

    return (
        <div className = "checkoutProducts">
            <img src={image} className='checkoutProduct_img '/>

            <div className="checkoutProducts_info">
                <p className= "checkoutProdutcs_title">{title}</p>
                <p className="checkoutProducts_price">
                    <small>RM</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProducts_rating">
                    {Array(rating).fill().map((_, i) =>
                     <p>🌟</p>
                    )}
                </div>
                {!hideButton &&(
                <button onClick={removeFromBasket} >Remove from basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProducts
