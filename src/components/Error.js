import { Link } from 'react-router-dom';
import '../css/Error.css';

export const Error = () => {
  return (
    <div id='Error'>
      <h1 className='Error404'>404 NOT FOUND</h1>
      <h3>The page you were looking for doesnot exist.</h3>
      <button className='goback'>
        <Link to='./'>Go Back</Link>
      </button>
    </div>
  );
};
