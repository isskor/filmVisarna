import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [ cart, setCart ] = useState();


  const values = { cart, setCart };

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
