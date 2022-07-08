import { Topbar } from './components/topbar/Topbar';
import { Sidebar } from './components/sidebar/Sidebar';
import './app.css';

const App =() => {
  return (
    <div className='app'>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>Others</div>
      </div>
    </div>
  )
}

export default App;
