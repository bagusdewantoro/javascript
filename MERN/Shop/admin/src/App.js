import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate
} from 'react-router-dom';

import { Main } from './Main';
import { Home } from './pages/home/Home';
import { UserList } from './pages/userList/UserList';
import './app.css';

const App =() => {
  return (
    <BrowserRouter>
      <Routes className='app'>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='users' element={<UserList />} />
          {/* <Route path='user/:userId' element={<User />} />
            <Route path='newUser' element={<NewUser />} />
            <Route path='products' element={<ProductList />} />
            <Route path='product/:productId' element={<Product />} />
          <Route path='newproduct' element={<NewProduct />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
