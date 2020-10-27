import React from 'react';
import "./Checkout.css";
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const[{basket, user},dispatch] = useStateValue();

    return (
        <div className="checkout">
           <div className="checkout_left">
               <img className="checkout_ad" src="https://raraa.s3-ap-southeast-1.amazonaws.com/newPay.png"/>

               <div>
                   <h3>Hello, {user?.email}</h3>
                   <h2 className="checkout_title">Your shopping basket</h2>              

                   {basket.map(item => (
                        <CheckoutProducts 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                   ))}

               </div>
            </div>

               <div className="checkout_right">
                    <Subtotal />
               </div>  
        </div>
    )
}


export default Checkout;