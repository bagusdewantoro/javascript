import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { Main } from './Main';
import { Home } from './pages/home/Home';
import { UserList } from './pages/userList/UserList';
import { User } from './pages/user/User';
import { NewUser } from './pages/newUser/NewUser';
import { ProductList } from './pages/productList/ProductList';
import { Product } from './pages/product/Product';
import { NewProduct } from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import './app.css';

const App =() => {
  const user = useSelector(state => state.user.currentUser)
  // console.log(user)
  const [userCurrent, setUserCurrent] = useState(false)

  const admin =
    localStorage.getItem('persist:root')
    ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser === null
      ? ''
      : JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin
    : ''
  // console.log('admin=', admin)
  // ABOVE CODES (TERNARY) IS SAME WITH BELOW:
  // let admin2;
  // if (!localStorage.getItem('persist:root')) {
  //   admin2 = ''
  // } else if (JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser === null) {
  //   admin2 = ''
  // } else {
  //   admin2 = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.isAdmin
  // }
  // console.log('admin2=', admin2)

  // let user2;
  // if (!user) {
  //   user2 = ''
  // } else {
  //   user2 = user
  // }
  // console.log('user2=', user2)

  useEffect(() => {
    setUserCurrent( !user ? '' : user.isAdmin)
  }, [userCurrent])
  console.log(userCurrent)

  return (
    <BrowserRouter>
      <Routes className='app'>
        <Route
          path='/'
          element = {userCurrent ? <Main /> : <Navigate to='login' />}
          // element = <Main />
        >
          <Route index element={<Home />} />
          <Route path='users' element={<UserList />} />
          <Route path='user/:userId' element={<User />} />
          <Route path='newUser' element={<NewUser />} />
          <Route path='products' element={<ProductList />} />
          <Route path='product/:productId' element={<Product />} />
          <Route path='newproduct' element={<NewProduct />} />
        </Route>
        <Route
          path='login'
          element = {userCurrent ? <Navigate to='/' /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
