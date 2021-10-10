import { useContext } from 'react';

import { BsCartPlus } from 'react-icons/bs'; // react icons
import { CartContext } from '../App';
import { SnackbarContext } from './Main';

export const CartButton = ({ id }) => {
  const { addToCart } = useContext(CartContext);
  const { setShowSnackbar, isMounted } = useContext(SnackbarContext);

  const handleClick = () => {
    setShowSnackbar(true);
    setTimeout(() => {
      if (isMounted) {
        setShowSnackbar(false);
      }
    }, 3000);
    addToCart(id);
  };

  return (
    <div className='item-children-right'>
      <p>Add to cart</p>
      <BsCartPlus onClick={handleClick} />
    </div>
  );
};
