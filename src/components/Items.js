import { Item } from './Item';
import { data } from '../data';

export const Items = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <Item
            // key={new Date().getTime().toString()}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </>
  );
};
