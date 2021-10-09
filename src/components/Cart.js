import { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from '../App';

// CART THAT SHOWS THE ITEMS THAT WAS ADDED TO CART
const Cart = () => {
  const { numItems } = useContext(CartContext);

  return (
    <div className='heading-cart'>
      <BsFillCartFill />
      <span>({numItems})</span>
    </div>
  );
};
export default Cart;
