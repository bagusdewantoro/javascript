import { useState } from 'react';

const BtnGenerate = () => {
  const id = () => Math.floor(Math.random() * 1000 + 1);
  const [generator, setGenerator] = useState([]);
  let [buttonNumber, setButtonNumber] = useState(1);

  const addButton = () => {

    let newItem = {
      id: id(),
      numss: buttonNumber,
    }
    setGenerator([...generator, newItem]);
    setButtonNumber(buttonNumber + 1);
    console.log(`buttonNumber: ${buttonNumber}`);
  }

  return (
    <button
      className='btn'
      onClick={ addButton }
    >
      Add Tab
    </button>
  )
}

export default BtnGenerate;
