import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartTitle = () => {
  return (
    <div className='CartTitle'>
      <i className='back-arrow'>
        <Link to='./'>
          <BsArrowLeft size={28.8} className='arrow-button' />
        </Link>
      </i>

      <div className='title'>
        <p>my cart</p>
      </div>

      <div className='right'></div>
    </div>
  );
};

export default CartTitle;
