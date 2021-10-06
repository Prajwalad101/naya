import { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from '../App';

// CART THAT SHOWS THE ITEMS THAT WAS ADDED TO CART
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='heading-cart'>
      <BsFillCartFill />
      <span>({cartItems})</span>
    </div>
  );
};
export default Cart;
