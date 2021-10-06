import { useContext, useRef } from 'react';
import { CartContext } from '../App';

// Data
import { data } from '../data';

//CSS
import '../css/Modal.css';

export const Modal = () => {
  const { setOpenModal } = useContext(CartContext);
  const { cartId } = useContext(CartContext);
  const modalref = useRef();

  const closeModal = (e) => {
    if (modalref.current === e.target) {
      setOpenModal(false);
    }
  };

  const getItem = (cartId) => {
    const itemAdded = data.filter((item) => item.id === cartId);
    return itemAdded[0].name;
  };

  return (
    <div className='modal-background' ref={modalref} onClick={closeModal}>
      <div className='modal-container'>
        <div className='title-close-btn'>
          <button onClick={() => setOpenModal(false)}> X </button>
        </div>
        <div className='title'>
          <h1>Shopping Cart</h1>
        </div>
        <div className='body'>{getItem(cartId)}</div>
        <div className='footer'>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
