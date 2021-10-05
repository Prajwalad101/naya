import { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from '../App';

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
