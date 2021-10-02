import { useState, useEffect } from 'react';
import Tabs from './Tabs';
import AddTab from './AddTab';

const App = () => {
  const randomId = () => Math.floor(Math.random() * 100000 + 1);
  // get local storage for state
  const [currentTab, setCurrentTab] = useState(
    localStorage.getItem('currentTab') ? JSON.parse(localStorage.getItem('currentTab')) : ''
  );
  const [tabList, setTabList] = useState(
    localStorage.getItem('tabList') ? JSON.parse(localStorage.getItem('tabList')) : []
  );
  const [tabNumber, setTabNumber] = useState(
    localStorage.getItem('tabNumber') ? JSON.parse(localStorage.getItem('tabNumber')) : 1
  );
  // const confirmDelete = () => {
  //   let confirmDelete = confirm('Are you sure?');
  //   confirmDelete ? alert('Success') : alert('Cancelled');
  // };
  const deleteTab = (id) => {
    const newTabList = tabList.filter((tab) => tab.id !== id)
    setTabList(newTabList);
    newTabList.length !== 0
      ? setCurrentTab(newTabList[newTabList.length - 1].id)
      : setCurrentTab('');
  };
  const addTab = () => {
    const getID = randomId();
    const newItem = {
      id: getID,
      label: `Tab ${tabNumber}`,
      content: `This is content number ${tabNumber}`
    };
    setTabList([...tabList, newItem]);
    setCurrentTab(newItem.id);
    setTabNumber(tabNumber + 1)
  }
  const tabsData = () => {
    // set local storage
    localStorage.setItem('tabList', JSON.stringify(tabList));
    localStorage.setItem('tabNumber', JSON.stringify(tabNumber));
    localStorage.setItem('currentTab', JSON.stringify(currentTab));
  };
  useEffect(() => tabsData());

  return (
    <div>
      <h1>My Expenses</h1>
      <AddTab addTab={ addTab } />
      <p></p>
      <div>
        {tabList.map((tab) => (
          <button
            key={ tab.id }
            onClick={() => setCurrentTab(tab.id)}
          >
            { tab.label }
          </button>
        ))}
      </div>
      {tabList.map((tab) => {
        if (tab.id === currentTab) {
          return (
            <Tabs
              key={tab.id}
              tabContent={tab}
              deleteTab={deleteTab}
            />
          )
        } else {
            return null
        };
      })}
    </div>
  );
};

export default App;
