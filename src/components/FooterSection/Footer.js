import '../../css/Footer.css';

const Footer = () => {
  return (
    <div id='Footer'>
      <hr className='footer-seperator' />
      <div className='footer-text'>
        <p className='name-address'>
          Coded by{' '}
          <span className='link-name'>
            <a href='https://www.instagram.com/prajwal_ad_/'>Prajwal</a>
          </span>
        </p>
        <p className='bottom-text'>
          Made with
          <span className='link-react'>
            {' '}
            <a href='https://reactjs.org/'>React</a>
          </span>
          , inspired by{' '}
          <span className='link-etsy'>
            <a href='https://www.etsy.com/'>etsy</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
