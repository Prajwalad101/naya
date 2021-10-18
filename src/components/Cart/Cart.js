import { useState } from 'react';
import { CartItem } from './CartItem';

// Functions
import {
  calcTotalPrice,
  getDefaultItems,
  getAddedItems,
} from './cartFunctions.js';

export const Cart = ({ idList }) => {
  const itemsAdded = getAddedItems(idList);
  const defaultItems = getDefaultItems(itemsAdded);

  const [numItems, setNumItems] = useState(defaultItems);

  return (
    <div>
      {itemsAdded.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            numItems={numItems}
            setNumItems={setNumItems}
          />
        );
      })}
      <h3>Total : Rs.{calcTotalPrice(numItems)}</h3>
    </div>
  );
};
