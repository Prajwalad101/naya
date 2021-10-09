import { useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from './Main';
import { Link } from 'react-router-dom';

// CART THAT SHOWS THE ITEMS THAT WAS ADDED TO CART
const CartIcon = () => {
  const { numItems } = useContext(CartContext);

  return (
    <div className='heading-cart'>
      <Link to='./cart'>
        <BsFillCartFill />
        <span>({numItems})</span>
      </Link>
    </div>
  );
};
export default CartIcon;
