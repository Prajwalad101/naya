import { useContext } from 'react';
import { SnackbarContext } from './Main';

import '../css/Snackbar.css';

export const Snackbar = () => {
  const { showSnackbar } = useContext(SnackbarContext);

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
};
