import { CartButton } from './CartButton';

// RETURNS A SPECIFIC ITEM
export const Item = ({ name, price, image, id }) => {
  return (
    <div className='item'>
      <img src={image} alt='name' className='item-children-top' />
      <div className='item-children-bottom'>
        <div className='item-children-left'>
          <h5>{name}</h5>
          <p>Rs.{price}</p>
        </div>
        <CartButton id={id} />
      </div>
    </div>
  );
};
