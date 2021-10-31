import { formatName } from './cartFunctions';
import { calcTotalPrice } from './cartFunctions';
import { useContext } from 'react';
import { CartContext } from '../../App';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length !== 0) {
    return (
      <section className='CheckoutContainer'>
        <div className='Checkout checkout1'>
          <h3>order summary</h3>
          <hr className='line' />
          {cartItems.map((item) => {
            return (
              <div className='checkout-item' key={Math.random()}>
                <p className='checkout-name'>{formatName(item.name, 17)}</p>
                <p className='checkout-price'>
                  {item.noOfItems} * {item.price}
                </p>
                <p className='checkout-total'>
                  Rs. {item.noOfItems * item.price}
                </p>
              </div>
            );
          })}
          <hr className='line' />
          <h2>
            <span>Total : </span>Rs. {calcTotalPrice(cartItems)}
          </h2>
        </div>
        <div className=' Checkout checkout2 '>
          <h3>order summary</h3>
          <div className='checkout-subtotal checkout-items'>
            <h4>Subtotal:</h4>
            <p>Rs. {calcTotalPrice(cartItems)}</p>
          </div>
          <div className='checkout-shipping checkout-items'>
            <h4>Shipping:</h4>
            <p>Rs. 100</p>
          </div>
          <div className='checkout-discount checkout-items'>
            <h4>Coupon Discount:</h4>
            <p>Rs. 100</p>
          </div>

          <h2>
            <span>Total : </span>Rs. {calcTotalPrice(cartItems)}
          </h2>
          <div className='proceed-checkout'>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default Checkout;
