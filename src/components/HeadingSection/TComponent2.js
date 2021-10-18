const TComponent2 = ({ type }) => {
  return (
    <div className='TComponent2 trending'>
      <img src={type.img} alt='' />
      <p>{type.name}</p>
    </div>
  );
};

export default TComponent2;
