import { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

// CART THAT SHOWS THE ITEMS THAT WAS ADDED TO CART
const CartIcon = () => {
  const { numItems } = useContext(CartContext);

  return (
    <div className='heading-cart'>
      <Link to='./cart'>
        <IoCartOutline size='1.85rem' />
        <span>({numItems})</span>
      </Link>
    </div>
  );
};
export default CartIcon;
