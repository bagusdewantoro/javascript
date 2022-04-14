import { useRef, useState } from 'react';

const ClickRef = () => {
  const countRef = useRef(0);
  const handle = () => {
    countRef.current++;
    console.log(`useRef: Clicked ${countRef.current} times`);
  }
  console.log('Ref rendered')
  return (
    <button onClick={handle}>Ref version</button>
  )
};

const ClickState = () => {
  const [count, setCount] = useState(0);
  const handle = () => {
    const updatedCount = count + 1;
    console.log(`useState: Clicked ${updatedCount} times`);
    setCount(updatedCount);
  }
  console.log('State rendered')
  return (
    <button onClick={handle}>State version</button>
  )
};

const App = () => {
  return (
    <div>
      <ClickRef />
      <ClickState />
    </div>
  )
}

export default App;
