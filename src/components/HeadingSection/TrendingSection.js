import TComponent from './TComponent';
import types from '../typeData';

const TrendingSection = () => {
  return (
    <div className='trending-max-width'>
      <section id='TrendingSection'>
        {types.map((type) => (
          <TComponent type={type} />
        ))}
      </section>
    </div>
  );
};

export default TrendingSection;
