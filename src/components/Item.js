import { FaCartPlus } from 'react-icons/fa';

export const Item = ({ name, price, image }) => {
  return (
    <div>
      <img src={image} alt='name' />
      <h5>{name}</h5>
      <p>Rs.{price}</p>
      <p>Add to cart</p>
      <FaCartPlus size='1.5rem' />
    </div>
  );
};
