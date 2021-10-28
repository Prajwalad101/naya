import { useContext } from 'react';
import { CartContext } from '../../App';

const CartHeading = () => {
  const { cartItems } = useContext(CartContext);

  const noItemsAdded = cartItems.length;

  let word = '';
  if (noItemsAdded === 0) {
    word = 'no item ';
  } else if (noItemsAdded === 1) {
    word = noItemsAdded + ' item ';
  } else {
    word = noItemsAdded + ' items ';
  }
  return (
    <div className='CartHeading'>
      <p className='heading'>
        You have {word}
        in cart
      </p>
    </div>
  );
};

export default CartHeading;
