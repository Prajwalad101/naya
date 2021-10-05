import { BsCartPlus } from 'react-icons/bs';

export const Item = ({ name, price, image }) => {
  return (
    <div className='item'>
      <img src={image} alt='name' className='item-children-top' />
      <div className='item-children-bottom'>
        <div className='item-children-left'>
          <h5>{name}</h5>
          <p>Rs.{price}</p>
        </div>
        <div className='item-children-right'>
          <p>Add to cart</p>
          <BsCartPlus size='1.5rem' />
        </div>
      </div>
    </div>
  );
};
