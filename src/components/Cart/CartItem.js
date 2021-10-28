import { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Counter } from './Counter';
import { formatName, removeFromCart } from './cartFunctions';
import { CartContext } from '../../App';

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className='CartItem'>
      <div className='upper-cart-container'>
        <div className='cart-image-container'>
          <img src={item.image} alt='' />
        </div>
        <FiTrash2
          className='trash'
          size={24}
          onClick={() => removeFromCart(item.id, cartItems, setCartItems)}
        />

        <Counter singleItem={item} />
      </div>

      <h5>{formatName(item.name, 25)}</h5>
    </div>
  );
};

export default CartItem;
