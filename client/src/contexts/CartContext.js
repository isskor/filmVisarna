import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartBookings, setCartBookings] = useState([]);

  const getCartBookings = async () => {
    let bookings = await fetch('http://localhost:3001/api/cartBookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cart),
    });
    const bookingsJson = await bookings.json();
    setCartBookings(bookingsJson);
  };

  useEffect(() => {
    getCartBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  const values = { cart, setCart, cartBookings, getCartBookings };
  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
