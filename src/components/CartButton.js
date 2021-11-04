import { useContext } from 'react';

import { RiShoppingCartLine } from 'react-icons/ri';
import { CartContext } from '../App';
import { SnackbarContext } from './Main';
import { checkDuplicates } from '../components/Cart/cartFunctions';

export const CartButton = ({ id }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const { setShowSnackbar, isMounted, setSnackBarType } =
    useContext(SnackbarContext);

  const handleClick = () => {
    checkDuplicates(cartItems, id, setSnackBarType, addToCart);
    setShowSnackbar(true);
    setTimeout(() => {
      if (isMounted) {
        setShowSnackbar(false);
      }
    }, 3000);
  };

  return (
    <div className='image-cart-overlay' onClick={handleClick}>
      <RiShoppingCartLine className='cart-icon' size={24} />
    </div>
  );
};
