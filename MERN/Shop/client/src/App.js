import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='products/:category' element={<ProductList />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='success' element={<Success />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
