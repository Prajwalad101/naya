import Title from './Title';
import CartIcon from './CartIcon';
import HamburgerIcon from './HamburgerIcon';
import '../../css/TitleSection.css';

const TitleSection = () => {
  return (
    <section id='TitleSection'>
      <HamburgerIcon />
      <Title />
      <CartIcon />
    </section>
  );
};

export default TitleSection;
