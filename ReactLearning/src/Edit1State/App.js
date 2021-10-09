import React, { useState } from 'react';
import ListItems from './ListItems'

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({text:'', key:''})

  const addItem = (e) => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      setItems([...items, newItem]);
    }
    setCurrentItem({text:'', key:''});
  };

  const handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now()
    });
  };

  const deleteItem = (key) => {
    setItems(items.filter(item => item.key !== key));
  };

  const setUpdate = (text, key) => {
    items.map(item => item.key===key ? item.text = text : null);
    setItems(items);
  };

  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={addItem}>
          <input type="text" placeholder="Enter task" value= {currentItem.text} onChange={handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{items.text}</p>
        <ListItems items={items} deleteItem={deleteItem} setUpdate={setUpdate}/>
      </header>
    </div>
  )
};

export default App;
