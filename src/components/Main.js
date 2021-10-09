import React, { useRef, useState } from 'react';

import { HeadingSection } from './HeadingSection';
import Title from './Title';
import { Items } from './Items';
import { Snackbar } from './Snackbar';

export const CartContext = React.createContext();

let cartId = []; // Id of the added cart item

export const Main = () => {
  const snackbarRef = useRef(null);

  const [numItems, setNumItems] = useState(0);

  const addToCart = (itemId) => {
    cartId.push(itemId);
    setNumItems(cartId.length);
  };

  return (
    <>
      <Snackbar ref={snackbarRef} />
      <CartContext.Provider
        value={{ cartId, numItems, addToCart, snackbarRef }}
      >
        <Title />
        <HeadingSection />
        <Items />
      </CartContext.Provider>
    </>
  );
};
