import { useState } from 'react';
import React from 'react';

import { HeadingSection } from './components/HeadingSection';
import Title from './components/Title';
import { Items } from './components/Items';
import { Modal } from './components/Modal';

export const CartContext = React.createContext();

let cartId; // Id of the added cart item

function App() {
  const [openModal, setOpenModal] = useState(false);

  // Changes the state of the modal and sets the value of id
  const addToCart = (isOpen, itemId) => {
    setOpenModal(isOpen);
    cartId = itemId;
  };

  return (
    <CartContext.Provider
      value={{ cartId, addToCart, openModal, setOpenModal }}
    >
      {openModal && <Modal />}
      <Title />
      <HeadingSection />
      <Items />
    </CartContext.Provider>
  );
}

export default App;
