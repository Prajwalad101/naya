import { useState } from 'react';

import { HeadingSection } from './components/HeadingSection';
import Title from './components/Title';
import { Items } from './components/Items';
import React from 'react';

export const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    console.log(cartItems);
    setCartItems(cartItems + 1);
  };

  return (
    <CartContext.Provider
      value={{ addToCart: addToCart, cartItems: cartItems }}
    >
      <Title />
      <HeadingSection />
      <Items />
    </CartContext.Provider>
  );
}

export default App;
