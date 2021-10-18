const TComponent1 = ({ type }) => {
  return (
    <div className='TComponent1 trending'>
      <img src={type.img} alt='' />
      <p>{type.name}</p>
    </div>
  );
};

export default TComponent1;
