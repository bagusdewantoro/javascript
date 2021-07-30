import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const clickFunction = () => {
    console.log('clickFunction');
  };

  return (
    <header>
      <h1 className='header'>{ title }</h1>
      <Button color='green' text='Add'
        click={clickFunction} />
    </header>
  )
};

Header.defaultProps =  {
  title: 'Task Tracker'
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;
