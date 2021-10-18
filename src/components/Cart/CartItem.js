import { Dropdown } from './Dropdown';

export const CartItem = ({ item, numItems, setNumItems }) => {
  return (
    <div>
      <Dropdown
        setNumItems={setNumItems}
        numItems={numItems}
        singleItem={item}
      />
      <h5>
        {item.name} : {item.price}
      </h5>
    </div>
  );
};
