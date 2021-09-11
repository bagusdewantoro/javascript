import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <h2>{ title }</h2>
  )
};

Header.defaultProps =  {
  title: 'Expense Tracker'
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Header;
