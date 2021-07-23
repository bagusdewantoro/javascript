import Menu from './Menu'

const Nav = ({ nav }) => {
  return (
    <nav className="menu">
      {nav.map((menu) => (
        <Menu key={menu.id} menu={menu} />
      ))}
    </nav>
  )
};

export default Nav;
