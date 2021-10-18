// import { useEffect, useState } from 'react';

export const Dropdown = ({ setNumItems, numItems, singleItem }) => {
  // const handleChange = (e) => {
  //   setNumItems({ ...numItems, [name]: parseInt(e.target.value) });
  // };
  const handleChange = (e) => {
    const changedItem = numItems.filter(
      (item) => item.name !== singleItem.name
    );

    setNumItems([
      ...changedItem,
      {
        name: singleItem.name,
        price: singleItem.price,
        noOfItems: parseInt(e.target.value),
      },
    ]);
  };

  return (
    <div>
      <select value={numItems[singleItem.name]} onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </div>
  );
};
