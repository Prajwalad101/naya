import { useContext, useRef } from 'react';
import { CartContext } from '../App';

//CSS
import '../css/Modal.css';

export const Modal = () => {
  const { addToCart } = useContext(CartContext);
  const modalref = useRef();

  const closeModal = (e) => {
    if (modalref.current === e.target) {
      addToCart(false);
    }
  };

  return (
    <div className='modal-background' ref={modalref} onClick={closeModal}>
      <div className='modal-container'>
        <div className='title-close-btn'>
          <button onClick={() => addToCart(false)}> X </button>
        </div>
        <div className='title'>
          <h1>Shopping Cart</h1>
        </div>
        <div className='body'>
          <p>Items that you added to cart</p>
        </div>
        <div className='footer'>
          <button onClick={() => addToCart(false)}>Cancel</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
