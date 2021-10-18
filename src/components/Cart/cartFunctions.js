import { data } from '../../data';

// returns the total price from an array of items
export const calcTotalPrice = (numItems) => {
  let totalPrice = 0;

  numItems.forEach((item) => {
    let price = 0;
    let noItems = 0;
    for (const key in item) {
      if (key === 'price') {
        price += item[key];
      }
      if (key === 'noOfItems') {
        noItems += item[key];
      }
      totalPrice += price * noItems;
    }
  });
  return totalPrice;
};

// returns and array of default items() from the items added to cart
export const getDefaultItems = (itemsAdded) => {
  const defaultItems = [];

  itemsAdded.forEach((item) =>
    defaultItems.push({ name: item.name, price: item.price, noOfItems: 1 })
  );
  return defaultItems;
};

// returns the list of added items from the list of id's
export const getAddedItems = (idList) => {
  let itemsAdded = []; // items that were added to cart

  data.forEach((item) => {
    idList.forEach((id) => {
      id === item.id && itemsAdded.push(item);
    });
  });
  return itemsAdded;
};
