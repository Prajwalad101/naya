import TComponent1 from './TComponent1';
import TComponent2 from './TComponent2';
import TComponent3 from './TComponent3';

const TrendingSection = () => {
  const type1 = {
    name: 'Gift Ideas',
    img: 'https://images.unsplash.com/photo-1592903297149-37fb25202dfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGdpZnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  };

  const type2 = {
    name: 'Face Masks',
    img: 'https://images.unsplash.com/photo-1586867764140-b624d7f34f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  };

  const type3 = {
    name: 'Decors',
    img: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
  };

  return (
    <section id='TrendingSection'>
      <TComponent1 type={type1} />
      <TComponent2 type={type2} />
      <TComponent3 type={type3} />
    </section>
  );
};

export default TrendingSection;
