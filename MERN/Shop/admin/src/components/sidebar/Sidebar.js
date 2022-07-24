import { Link } from 'react-router-dom';
import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';


export const Sidebar = () => {
  const menuData = [
    {
      title: 'Dashboard',
      submenu: [
        {icon: LineStyle, name: 'Home'},
        {icon: Timeline, name: 'Analytics'},
        {icon: TrendingUp, name: 'Sales'},
      ]
    },
    {
      title: 'Quick Menu',
      submenu: [
        {icon: PermIdentity, name: 'Users', link: 'users'},
        {icon: Storefront, name: 'Product'},
        {icon: AttachMoney, name: 'Transactions'},
        {icon: BarChart, name: 'Reports'},
      ]
    },
    {
      title: 'Notifications',
      submenu: [
        {icon: MailOutline, name: 'Mail'},
        {icon: DynamicFeed, name: 'Feedback'},
        {icon: ChatBubbleOutline, name: 'Messages'},
      ]
    },
    {
      title: 'Staff',
      submenu: [
        {icon: WorkOutline, name: 'Manage'},
        {icon: Timeline, name: 'Analytics'},
        {icon: Report, name: 'Reports'},
      ]
    },
  ]
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        {menuData.map((menu, index) => <SideBarTitle key={index} title={menu.title} menus={menu.submenu}/> )}
      </div>
    </div>
  )
}


const SideBarTitle = ({ title, menus }) => {
  return (
    <div className='sidebarMenu'>
      <h3 className="sidebarTitle">{title}</h3>
      {menus.map((el, index) => (
        <SubMenu
          key={index}
          icon={el.icon}
          name={el.name}
          link={!el.link ? '/' : el.link}
        />
      ))}
    </div>
  )
}


const SubMenu = ({icon: Icon, name, link}) => {
  return (
    <Link
      to={link}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <ul className='sidebarList'>
        <li className="sidebarListItem">
          <Icon className="sidebarIcon" />
          {name}
        </li>
      </ul>
    </Link>
  )
}
