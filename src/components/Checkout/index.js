import React, { useContext } from 'react'
import { ShoppingContext } from '../ShoppingContext/ShoopingContext'
import './style.scss'

const Checkout = () => {
    const [, cartProducts] = useContext(ShoppingContext)

    
    const calculateTotal = () => {
        let total = 0;
        if(cartProducts.length !== 0){
            const result = cartProducts.map(product => product.price * product.quantity).reduce((a, b) => a + b)
            total = result;
        }
        return total
    }
    
    const proceedToCheckout = () => {
        alert(`Your total is £${calculateTotal()}`)
    }
        

    return (
        <div className="checkout-container">
            <div className="total">
                <span>Total:</span>
                <span>£{calculateTotal()}</span>
            </div>
        <button onClick={() => proceedToCheckout()}>CHECKOUT</button>
        </div>
    )
}

export default Checkout
