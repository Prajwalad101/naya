import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <h3>The page you were looking for doesnot exist.</h3>
      <Link to='/'>Go Back</Link>
    </div>
  );
};
