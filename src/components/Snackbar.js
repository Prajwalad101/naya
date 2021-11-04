import { useEffect, useContext } from 'react';
import { SnackbarContext } from './Main';
import { AiFillCheckSquare } from 'react-icons/ai';
import { MdOutlineError } from 'react-icons/md';

import '../css/Snackbar.css';

export const Snackbar = () => {
  const { showSnackbar, setIsMounted, snackBarType } =
    useContext(SnackbarContext);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, [setIsMounted]);

  return (
    <div className='snackbar' id={showSnackbar ? 'show' : 'hide'}>
      <div className='symbol'>
        <div>
          {snackBarType === 'addtocart' ? (
            <AiFillCheckSquare size={30} />
          ) : (
            <MdOutlineError size={30} />
          )}
        </div>
      </div>
      <div className='message'>
        <p>
          {snackBarType === 'addtocart'
            ? 'Item added to cart'
            : 'Item has already been added to cart'}
        </p>
      </div>
    </div>
  );
};
