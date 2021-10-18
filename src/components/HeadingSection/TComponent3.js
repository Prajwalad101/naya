const TComponent3 = ({ type }) => {
  return (
    <div className='TComponent3 trending'>
      <img src={type.img} alt='' />
      <p>{type.name}</p>
    </div>
  );
};

export default TComponent3;
