import { Item } from './Item';
import { data } from '../../data';
import { v4 as uuid_v4 } from 'uuid';
import React from 'react';

// CREATES AND RETURNS INDIVIDUAL ITEM COMPONENTS FROM THE DATA
const Items = () => {
  return (
    <div className='Items'>
      {data.map((item) => {
        return (
          <Item
            key={uuid_v4()}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default Items;
