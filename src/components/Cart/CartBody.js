import CartItem from './CartItem';
import { CartContext } from '../../App';
import { useContext } from 'react';
import { orderItems } from './cartFunctions';

const CartBody = () => {
  const { cartItems } = useContext(CartContext);
  orderItems(cartItems);

  return (
    <div className='CartBody'>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartBody;
