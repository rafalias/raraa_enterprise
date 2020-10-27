import React, {useEffect, useState} from 'react';
import CheckoutProducts from './CheckoutProducts';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from "./axios";
import { db} from "./firebase";


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe =useStripe();
    const elements = useElements();
    const history = useHistory();

    const[error, setError] = useState(null);
    const[disabled, setDisabled] = useState(true)
    const[clientSecret, setclientSecret] = useState(true)

    const[succeeded, setsucceeded] = useState(false)
    const[processing, setprocessing] = useState("")

    useEffect(() =>{
            //generate the special stripe secret which allows us to charge a customer
            //if the basket change, clientSecret is update

            const getclientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    //Stripe expects the total in a currencies subunits
                    url: `/payment/create?total=${getBasketTotal(basket) * 10}`
                })
                setclientSecret(response.data.clientSecret)
            }
            getclientSecret();
    }, [basket])

 console.log('the secret is >>>', clientSecret)
 console.log('the user ID is >>>', user?.id)

    const handleSubmit =async (e) =>{
            //stripe stuff
            e.preventDefault();
            setprocessing(true);
            

            const payLoad = await stripe.confirmCardPayment(clientSecret, {
                payment_method:{
                    card: elements.getElement(CardElement)
                }
            }).then(({paymentIntent}) => {
            //payment confirmation = payment intent
            
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            }) 

            setsucceeded(true)
            setError(null)
            setprocessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            
            history.replace('/orders')
        })
    }

    const handleChange = e =>{
        // display the changes in card elemnt 
        //display if there is any error
        setDisabled(e.empty); //if form empty
        setError(e.error ? e.error.message : ""); //if error show error
    }

    return (
        <div className='payment'>
            <div className = 'payment_container'>
            <h1>
            Checkout(
                <Link to ="/checkout">{basket?.length} items</Link>
            )
                
            </h1>
                
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>A-15-11</p>
                        <p>PJ MIDTOWN</p>
                    </div>
                </div>

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
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

                <div className='payment_section'>
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/*stripe*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className = 'payment_priceContainer'>
                                <CurrencyFormat
                                    renderText = {(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"RM"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
