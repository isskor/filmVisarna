import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartBookings, setCartBookings ] = useState([]);

    const values = { cart, setCart, cartBookings };

    const getCartBookings = async () => {
        let bookings = await fetch('http://localhost:3001/api/cartBookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cart),
        });
        const bookingsJson = await bookings.json() 
        setCartBookings(bookingsJson)
    };
    useEffect(() => {
        getCartBookings()
    },[cart]);
    console.log(cartBookings);
    return (
        <CartContext.Provider value={values}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
