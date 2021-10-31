import { CartButton } from '../CartButton';
import { formatName } from '../Cart/cartFunctions';

// RETURNS A SPECIFIC ITEM5
export const Item = ({ name, price, image, id }) => {
  return (
    <div className='item'>
      <div className='image-container'>
        <img src={image} alt={name} />
      </div>
      <div className='item-bottom'>
        <p className='item-name'>{formatName(name, 30)}</p>
        <div className='price-cart'>
          <p className='item-price'>Rs.{price}</p>
          <CartButton id={id} />
        </div>
      </div>

      <hr className='seperator' />
    </div>
  );
};
