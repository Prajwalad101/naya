import React from 'react';

import { data } from '../data';

export const Cart = ({ idList }) => {
  let itemsAdded = []; // items that were added to cart

  // find the items from the id
  data.forEach((item) => {
    idList.forEach((id) => {
      id === item.id && itemsAdded.push(item);
    });
  });

  const listItems = itemsAdded.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};
