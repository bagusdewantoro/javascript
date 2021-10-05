import { useState } from 'react';

const App = () => {
  const [numValue, setNumValue] = useState(1);
  return (
    <div>
      <input type='text' placeholder={numValue} onChange={(e) => setNumValue(e.target.value)}></input>
      <p>{numValue}</p>
    </div>
  )
};

export default App;
