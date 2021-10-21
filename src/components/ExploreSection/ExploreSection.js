//CSS
import '../../css/ExploreSection.css';

//Components
import Items from './Items';

const ExploreSection = () => {
  return (
    <section id='ExploreSection'>
      <p className='top-picks'>Top Picks For You</p>
      <Items />
    </section>
  );
};

export default ExploreSection;
