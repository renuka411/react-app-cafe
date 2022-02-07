import React, { createContext, useState } from 'react'
import data from '../../data'

export const ShoppingContext = createContext();

export const ShoppingProvider = props => {
    const productList = data;
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingContext.Provider value={ [ productList, cartProducts, setCartProducts ] }>
            {props.children}
        </ShoppingContext.Provider>
    )
}

