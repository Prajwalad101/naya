import { CartContext } from '../../App';
import { useContext } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { useState } from 'react';

export const Counter = ({ singleItem }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const unChangedItems = cartItems.filter(
    (item) => item.name !== singleItem.name
  );

  const incrementCounter = () => {
    setCartItems([
      ...unChangedItems,
      {
        ...singleItem,
        noOfItems: singleItem.noOfItems + 1,
      },
    ]);
  };

  const decrementCounter = () => {
    setCartItems([
      ...unChangedItems,
      {
        ...singleItem,
        noOfItems: singleItem.noOfItems - 1,
      },
    ]);
  };

  return (
    <div className='CounterComponent'>
      <div className='Counter'>
        <AiOutlineMinusSquare
          onClick={decrementCounter}
          className='decrement-counter'
        />
        <input
          type='text'
          readOnly
          className='counter-input'
          value={singleItem.noOfItems}
        />
        <AiOutlinePlusSquare
          onClick={incrementCounter}
          className='increment-counter'
        />
      </div>
      <p className='item-total'>
        <span>Total : </span>
        Rs. {singleItem.price * singleItem.noOfItems}
      </p>
    </div>
  );
};
