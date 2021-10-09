import { useContext } from 'react';

import { BsCartPlus } from 'react-icons/bs'; // react icons
import { CartContext } from '../App';

export const CartButton = ({ id }) => {
  const { addToCart } = useContext(CartContext);
  const { snackbarRef } = useContext(CartContext);

  return (
    <div className='item-children-right'>
      <p>Add to cart</p>
      <BsCartPlus
        onClick={() => {
          snackbarRef.current.show();
        }}
      />
    </div>
  );
};
