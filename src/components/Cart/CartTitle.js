import { BsArrowLeft } from 'react-icons/bs';

const CartTitle = () => {
  return (
    <div className='CartTitle'>
      <i className='back-arrow'>
        <BsArrowLeft size='1.8rem' />
      </i>

      <div className='title'>
        <p>my cart</p>
      </div>

      <div className='right'></div>
    </div>
  );
};

export default CartTitle;
