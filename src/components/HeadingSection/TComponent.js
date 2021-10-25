const TComponent = ({ type }) => {
  return (
    <div className='TComponent trending'>
      <img src={type.img} alt='' />
      <p>{type.name}</p>
    </div>
  );
};

export default TComponent;
