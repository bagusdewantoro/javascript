import { Link } from 'react-router-dom'
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from '@material-ui/icons'
import './user.css'


export const User = () => {
  const userAccount = [
    [PermIdentity, 'kurt1'],
    [CalendarToday, '05.11.1976'],
  ]

  const userContact =[
    [PhoneAndroid, '+65 968 5426'],
    [MailOutline, 'kurt1@gmail.com'],
    [LocationSearching, 'Seattle | USA'],
  ]

  const editUser = [
    ['Username', 'text', 'kurt1'],
    ['Full Name', 'text', 'Kurt 1'],
    ['Email', 'email', 'kurt@gmail.com'],
    ['Phone', 'text', '+65 968 5426'],
    ['Address', 'text', 'Seattle | USA'],
  ]

  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/newUser/'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              className='userShowImage'
              src='https://akcdn.detik.net.id/visual/2015/02/20/3cddf749-6f3d-40db-a6e7-a847b01ae4c7_169.jpg?w=650'
              alt=''
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Kurt 1</span>
              <span className='userShowUserTitle'>Dreamer number 1</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account</span>
            {userAccount.map((data, index) => (
              <UserShowInfo
                key={index}
                icon={data[0]}
                string={data[1]}
              />
            ))}
            <span className='userShowTitle'>Contact</span>
            {userContact.map((data, index) => (
              <UserShowInfo
                key={index}
                icon={data[0]}
                string={data[1]}
              />
            ))}
          </div>
        </div>

        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              {editUser.map((data, index) => (
                <UserUpdateItem
                  key={index}
                  label={data[0]}
                  type={data[1]}
                  placeHolder={data[2]}
                />
              ))}
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://akcdn.detik.net.id/visual/2015/02/20/3cddf749-6f3d-40db-a6e7-a847b01ae4c7_169.jpg?w=650'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='fileID'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input
                  type='file'
                  id='fileID'
                  style={{display:'none'}}
                />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const UserUpdateItem = ({ label, type, placeHolder}) => {
  return (
    <div className='userUpdateItem'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className='userUpdateInput'
      />
    </div>
  )
}

const UserShowInfo = ({ icon: Icon, string }) => {
  return (
    <div className='userShowInfo'>
      <Icon className='userShowIcon' />
      <span className='userShowInfoTitle'>{string}</span>
    </div>
  )
}
