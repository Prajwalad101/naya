import { useState } from 'react';
import React from 'react';

import { HeadingSection } from './components/HeadingSection';
import Title from './components/Title';
import { Items } from './components/Items';
import { Modal } from './components/Modal';

export const CartContext = React.createContext();

function App() {
  const [cartItems, setCartItems] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const addToCart = (isOpen) => {
    setOpenModal(isOpen);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, openModal, setOpenModal }}
    >
      <Title />
      <HeadingSection />
      <Items />
      {openModal && <Modal />}
    </CartContext.Provider>
  );
}

export default App;
