import PropTypes from 'prop-types'

// BASIC ===============================
const Header1 = (props) => {
  return (
    <header>
      <h1 className='header'>{props.title}</h1>
    </header>
  )
};

// if props is not defined in parent file:
Header1.defaultProps =  {
  title: 'Header1 : Default Props'
};

Header1.propTypes = {
  title: PropTypes.string.isRequired,
};


// OTHER WAY ===============================

const Header2 = ({ titleSecond }) => {
  return (
    <header>
      <h1 className='header'>{titleSecond}</h1>
    </header>
  )
};

Header2.defaultProps =  {
  titleSecond: 'Header2'
};

Header2.propTypes = {
  titleSecond: PropTypes.string.isRequired,
};


export {Header1, Header2};
