import React from 'react';
import CartTitle from './CartTitle';
import CartHeading from './CartHeading';
import CartBody from './CartBody';
import Checkout from './Checkout';

//CSS
import '../../css/Cart.css';

// CART COMPONENT
export const Cart = () => {
  return (
    <section>
      <CartTitle />
      <CartHeading />
      <section className='CartGrid'>
        <CartBody />
        <Checkout />
      </section>
    </section>
  );
};
