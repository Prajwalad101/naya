import { Item } from './Item';
import { data } from '../data';
import { v4 as uuid_v4 } from 'uuid';

export const Items = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <Item
            key={uuid_v4()}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </>
  );
};
