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
            <div className='userShowInfo'>
              <PermIdentity className='userShowIcon' />
              <span className='userShowInfoTitle'>kurt1</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='userShowInfoTitle'>05.11.1976</span>
            </div>
            <span className='userShowTitle'>Contact</span>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='userShowInfoTitle'>+65 968 5426</span>
            </div>
            <div className='userShowInfo'>
              <MailOutline className='userShowIcon' />
              <span className='userShowInfoTitle'>kurt1@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearching className='userShowIcon' />
              <span className='userShowInfoTitle'>Seattle | USA</span>
            </div>
          </div>
        </div>

        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='kurt1'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Kurt 1'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='kurt@gmail.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+65 968 5426'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='Seattle | USA'
                  className='userUpdateInput'
                />
              </div>
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
