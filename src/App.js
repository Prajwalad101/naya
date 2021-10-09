import React, { useState, useRef } from 'react';

import { HeadingSection } from './components/HeadingSection';
import Title from './components/Title';
import { Items } from './components/Items';
import { Modal } from './components/Modal';
import { Snackbar } from './components/Snackbar';

export const CartContext = React.createContext();

let cartId; // Id of the added cart item

function App() {
  const [openModal, setOpenModal] = useState(false);
  const snackbarRef = useRef(null);

  // Changes the state of the modal and sets the value of id
  const addToCart = (isOpen, itemId) => {
    setOpenModal(isOpen);
    cartId = itemId;
  };

  return (
    <>
      <Snackbar ref={snackbarRef} />
      <CartContext.Provider
        value={{ cartId, addToCart, openModal, setOpenModal, snackbarRef }}
      >
        {openModal && <Modal />}
        <Title />
        <HeadingSection />
        <Items />
      </CartContext.Provider>
    </>
  );
}

export default App;
