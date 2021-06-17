import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  // checks if we have cart in localstorage, if true set that to state, otherwise set empty array
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );
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

  const handleCart = (cartArr) => {
    // update state
    setCart(cartArr);
    // update local storage
    localStorage.setItem('cart', JSON.stringify(cartArr));
  };

  const values = { cart, setCart, handleCart, cartBookings, getCartBookings };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
