import '../../css/NavBar.css';
import NavItems from './NavItems';

// RETURNS A NAVBAR WITH INDIVIDUAL NAVITEMS
const NavBar = () => {
  return (
    <div className='NavBar'>
      <NavItems title='jewelry & accessories' />
      <NavItems title='home & living' />
      <NavItems title='wedding & party' />
      <NavItems title='toys & entertainment' />
      <NavItems title='art & collectibles' />
      <NavItems title='vintage' />
    </div>
  );
};
export default NavBar;
