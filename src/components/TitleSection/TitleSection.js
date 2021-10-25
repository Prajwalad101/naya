import Title from './Title';
import CartIcon from './CartIcon';
import HamburgerIcon from './HamburgerIcon';
import SearchBar from '../SearchSection/SearchBar';
import NavBar from '../HeadingSection/NavBar';

import '../../css/TitleSection.css';

const TitleSection = () => {
  return (
    <section id='TitleSection' className='max-width'>
      <div className='TitleBar'>
        <HamburgerIcon />
        <Title />
        <SearchBar />
        <CartIcon />
        <NavBar />
      </div>
    </section>
  );
};

export default TitleSection;
