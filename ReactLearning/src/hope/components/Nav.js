const Menu = ({ menu }) => {
  return (
    <a className={menu.style} href="#0">{menu.text}</a>
  )
};

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
