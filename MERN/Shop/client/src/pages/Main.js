import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>

  )
}

export default Main;
