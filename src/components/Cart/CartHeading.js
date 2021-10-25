const CartHeading = ({ noItems }) => {
  let word = '';
  if (noItems === 0) {
    word = 'no item';
  } else if (noItems === 1) {
    word = noItems + ' item ';
  } else {
    word = noItems + ' items ';
  }
  return (
    <div className='CartHeading'>
      <p className='heading'>
        You have {word}
        in cart
      </p>
    </div>
  );
};

export default CartHeading;
