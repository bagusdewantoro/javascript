import React from 'react';

const ListItems = ({ items, deleteItem, setUpdate }) => {
  return (
    <div>
      {items.map(item => (
        <div className="list" key={item.key}>
          <p>
            <input type="text" id={item.key} value={item.text} onChange={(e) => {
              setUpdate(e.target.value, item.key)}}
            />
            <span>
              <button onClick={() => deleteItem(item.key)}>Del</button>
            </span>
          </p>
        </div>
      ))}
    </div>
  )
};

export default ListItems;
