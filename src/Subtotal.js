import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useHistory} from "react-router-dom";


function Subtotal() {

    const history = useHistory(); //use/give the browse history
    const[{basket, user}, dispatch] = useStateValue(); //pull basket from data layer
    console.log(basket)

    return (
        <div className="subtotal">
            <CurrencyFormat renderText = {(value) => (
                <>
                <p>
                    Subtotal({basket?.length} items):
                    <strong>{value}</strong>
                </p>
                <small className="subTotal_gift">
                    <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"RM"}
            />
            <button onClick={e => history.push('/payment')}> Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
