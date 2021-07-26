import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  return (
    <header>
      <h1 className='header'>{ title }</h1>
      <Button color='green' text='Button 1' />
      <Button color='red' text='Button 2' />
      <Button color='blue' text='Button 3' />
      <Button />
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
