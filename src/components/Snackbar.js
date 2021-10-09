import { useState, forwardRef, useImperativeHandle } from 'react';

import '../css/Snackbar.css';

export const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));

  return (
    <div className='snackbar' id={showSnackbar ? 'show' : 'hide'}>
      <div className='symbol'>
        <h1>&#x2713;</h1>
      </div>
      <div className='message'>
        <p>Item added to cart</p>
      </div>
    </div>
  );
});
