import Cart from './Cart';

// RETURNS THE HEADING TITLE AND THE CART ICON COMPONENT
const HeadingTitle = () => {
  return (
    <div className='heading-title'>
      <h2>shop for independent items made by independent creators.</h2>
      <Cart />
    </div>
  );
};

export default HeadingTitle;
