import { useContext, useRef } from 'react';
import { CartContext } from '../App';

// Data
import { data } from '../data';

//CSS
import '../css/Modal.css';

//RETURNS A MODAL CONTAINING THE INFO ABOUT THE ITEM ADDED TO CART
export const Modal = () => {
  const { setOpenModal } = useContext(CartContext); // value to open or close modal
  const { cartId } = useContext(CartContext); // id of the cart that was added
  const modalref = useRef();

  // called when the button to close the modal is clicked
  const closeModal = (e) => {
    if (modalref.current === e.target) {
      setOpenModal(false);
    }
  };

  // filters a specific item from the given id and returns it
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
