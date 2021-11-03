import { HiArrowSmRight } from 'react-icons/hi';
import { CartButton } from '../CartButton';
import { IoStarSharp, IoStarHalfSharp } from 'react-icons/io5';

// RETURNS A SPECIFIC ITEM5
export const Item = ({
  name,
  price,
  image,
  id,
  inStock,
  rating,
  noRatings,
  seller,
}) => {
  const checkRatings = (rating) => {
    const starArray = [];
    if (rating % 1 === 0) {
      for (let i = rating; i > 0; i--) {
        starArray.push(1);
      }
    } else {
      const decimalRating = rating % 1;
      const intRating = rating - (rating % 1);
      for (let i = intRating; i > 0; i--) {
        starArray.push(1);
      }
      starArray.push(decimalRating);
    }
    return starArray;
  };

  const ratingsArray = checkRatings(rating);

  return (
    <div className='item'>
      <div className='image-container'>
        <img src={image} alt={name} className='item-image' />
        <CartButton id={id} />
      </div>
      <div className='item-bottom'>
        <p className='item-name'>{name}</p>
        <p className='item-instock'>
          {inStock === 'Yes' ? 'IN STOCK' : 'NOT IN STOCK'}
        </p>
        <div className='price-cart'>
          <p className='item-price'>Rs. {price}</p>
        </div>
        <p className='item-ratings'>
          {ratingsArray.map((star) =>
            star === 1 ? (
              <IoStarSharp key={Math.random()} />
            ) : (
              <IoStarHalfSharp key={Math.random()} />
            )
          )}
          <span className='item-noRatings'>({noRatings})</span>
        </p>
        <p className='item-seller'>{seller}</p>

        <div className='more'>
          <p>More like this </p>
          <HiArrowSmRight className='right-arrow' size={20} />
        </div>
      </div>

      {/* <hr className='seperator' /> */}
    </div>
  );
};
