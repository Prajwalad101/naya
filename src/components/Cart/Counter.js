import { CartContext } from '../../App';
import { useContext } from 'react';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

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
    if (singleItem.noOfItems > 1) {
      setCartItems([
        ...unChangedItems,
        {
          ...singleItem,
          noOfItems: singleItem.noOfItems - 1,
        },
      ]);
    }
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
      <p className='counter-item-price'>
        <span>Price : </span>
        Rs. {singleItem.price}
      </p>
    </div>
  );
};
