import './style.css';
import adidas from './adidas.png';

const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='sneaker'>
          <div className='circle'></div>
          <img src={ adidas } alt="adidas" />
        </div>
        <div className='info'>
          <h1 className='title'>Adidas ZX</h1>
          <h3>Future-ready trainers with wrapped boost for exception comfort</h3>
          <div className='sizes'>
            <button>39</button>
            <button>40</button>
            <button className='active'>42</button>
            <button>44</button>
          </div>
        </div>
      </div>
    </div>

  )
};

export default App;
