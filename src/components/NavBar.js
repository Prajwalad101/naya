import NavItems from './NavItems';

// RETURNS A NAVBAR WITH INDIVIDUAL NAVITEMS
const NavBar = () => {
  return (
    <div className='navbar'>
      <NavItems title='prints' />
      <NavItems title='t-shirts' />
      <NavItems title='gifts' />
      <NavItems title='toys' />
      <NavItems title='jewelry' />
    </div>
  );
};
export default NavBar;
