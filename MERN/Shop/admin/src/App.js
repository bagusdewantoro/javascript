import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux'
// import { useState, useEffect } from 'react'

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

  // const [token, setToken] = useState(null)
  // const checkToken =
  //   localStorage.getItem('persist:root')
  //   ? JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser === null
  //     ? ''
  //     : JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken
  //   : ''
  // useEffect(() => {
  //   setToken(checkToken)
  // }, [])
  // console.log(token)

  return (
    <BrowserRouter>
      <Routes className='app'>
        <Route
          path='/'
          element = {user ? <Main /> : <Navigate to='login' />}
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
          element = {user ? <Navigate to='/' /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
