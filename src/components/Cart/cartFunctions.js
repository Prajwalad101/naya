import { data } from '../../data';

// Returns the total price from an array of items
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

// Returns the formatted name of the item
export const formatName = (itemName, length) => {
  let formattedName = '';
  if (itemName.length > length) {
    formattedName = itemName.slice(0, length) + '...';
  } else {
    formattedName = itemName;
  }
  return formattedName;
};

//Removes an item from cart
export const removeFromCart = (id, cartItems, setCartItems) => {
  const newItems = cartItems.filter((item) => item.id !== id);
  setCartItems(newItems);
};

// Returns a specific item from a given id
export const itemFromId = (id) => {
  let cartItem;
  data.forEach((item) => {
    if (id === item.id) {
      cartItem = item;
    }
  });
  return { ...cartItem, noOfItems: 1 };
};

//Order cart items
export const orderItems = (items) => {
  items.sort((a, b) => (a.price < b.price ? 1 : -1));
};

//Checks for duplicate items
export const checkDuplicates = (cartItems, id, setSnackBarType, addToCart) => {
  if (cartItems.filter((e) => e.id === id).length > 0) {
    setSnackBarType('duplicate');
  } else {
    addToCart(id);
    setSnackBarType('addtocart');
  }
};
