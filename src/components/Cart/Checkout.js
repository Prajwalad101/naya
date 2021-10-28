import { formatName } from './cartFunctions';
import { calcTotalPrice } from './cartFunctions';
import { useContext } from 'react';
import { CartContext } from '../../App';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length !== 0) {
    return (
      <div className='Checkout'>
        <h3>Checkout</h3>
        <hr className='line' />
        {cartItems.map((item) => {
          return (
            <div className='checkout-item' key={Math.random()}>
              <p className='name'>{formatName(item.name, 17)}</p>
              <p className='price'>
                {item.noOfItems} * {item.price}
              </p>
              <p className='total'>Rs. {item.noOfItems * item.price}</p>
            </div>
          );
        })}
        <hr className='line' />
        <h2>
          <span>Total : </span>Rs. {calcTotalPrice(cartItems)}
        </h2>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Checkout;
