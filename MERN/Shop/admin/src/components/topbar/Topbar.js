import './topbar.css';
import {
  NotificationsNone,
  Language,
  Settings
} from '@material-ui/icons';

export const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topLeft'>
          <span className='logo'>dom&sko admin</span>
        </div>
        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
            <Language />
          </div>
          <div className='topbarIconContainer'>
            <Settings />
          </div>
          <img
            src='https://avatars.githubusercontent.com/u/69944435?v=4'
            alt=''
            className='topAvatar'
          />
        </div>
      </div>
    </div>
  )
}
