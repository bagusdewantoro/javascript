import { useState } from 'react';
import Tabs from './Tabs';
import AddTab from './AddTab';

const App = () => {
  const randomId = () => Math.floor(Math.random() * 100000 + 1);
  const [currentTab, setCurrentTab] = useState('');
  const [tabList, setTabList] = useState([]);
  const [tabNumber, setTabNumber] = useState(1);
  const deleteTab = (id) => {
    const newTabList = tabList.filter((tab) => tab.id !== id)
    setTabList(newTabList);
    newTabList.length !== 0
      ? setCurrentTab(newTabList[newTabList.length - 1].id)
      : setCurrentTab('');
    // console.log(newTabList);
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
  return (
    <div>
      <h1>With State Hook</h1>
      <AddTab addTab={ addTab }/>
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