import { useContext } from 'react';

import { RiShoppingCartLine } from 'react-icons/ri';
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
    <div className='image-cart-overlay' onClick={handleClick}>
      <RiShoppingCartLine className='cart-icon' size={24} />
    </div>
  );
};
