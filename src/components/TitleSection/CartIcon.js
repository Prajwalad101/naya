import { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

// CART THAT SHOWS THE ITEMS THAT WAS ADDED TO CART
const CartIcon = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='heading-cart'>
      <Link to='/cart'>
        <IoCartOutline size={29.6} />
        <span>({cartItems.length})</span>
      </Link>
    </div>
  );
};
export default CartIcon;
