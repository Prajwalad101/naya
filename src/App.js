import React, { useRef, useState } from 'react';

import { HeadingSection } from './components/HeadingSection';
import Title from './components/Title';
import { Items } from './components/Items';
import { Snackbar } from './components/Snackbar';

export const CartContext = React.createContext();

let cartId = []; // Id of the added cart item

function App() {
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
}

export default App;
