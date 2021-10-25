//CSS
import '../../css/ExploreSection.css';

//Components
import Items from './Items';

const ExploreSection = () => {
  return (
    <div className='max-width'>
      <section id='ExploreSection'>
        <p className='Explore'>Explore</p>
        <Items />
      </section>
    </div>
  );
};

export default ExploreSection;
