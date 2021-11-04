import { useContext } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Counter } from './Counter';
import { formatName, removeFromCart } from './cartFunctions';
import { CartContext } from '../../App';

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className='CartItem'>
      <div className='left-section'>
        <div className='image-trash-desktopname'>
          <img src={item.image} alt='' className='cart-image' />
          <div className='trash-desktopname'>
            <div className='item-info'>
              <h5 className='desktop-name'>{formatName(item.name, 25)}</h5>
              <p className='cart-instock'>
                {item.inStock === 'Yes' ? 'IN STOCK' : 'NOT IN STOCK'}
              </p>
            </div>
            <FiTrash2
              className='trash'
              size={24}
              strokeWidth='1.5px'
              onClick={() => removeFromCart(item.id, cartItems, setCartItems)}
            />
          </div>
        </div>
        <h5 className='name'>{formatName(item.name, 25)}</h5>
      </div>

      <Counter singleItem={item} />

      <p className='counter-item-total'>
        <span>Total : </span>
        Rs. {item.price * item.noOfItems}
      </p>
    </div>
  );
};

export default CartItem;
