import { useState } from 'react';
import Tabs from './Tabs';
import AddTab from './AddTab';

const App = () => {
  const randomId = () => Math.floor(Math.random() * 100000 + 1);
  const [currentTab, setCurrentTab] = useState('');
  const [tabList, setTabList] = useState([]);
  let [tabNumber, setTabNumber] = useState(1);
  const deleteTab = (id) => {
    setTabList(tabList.filter((tab) => tab.id !== id));
    tabList.length !== 0 ? setCurrentTab(tabList[tabList.length - 1].id) : setCurrentTab('');
    // console.log(id);
    // console.log(tabList);
  };
  const addTab = () => {
    const getID = randomId();
    const newItem = {
      id: getID,
      label: `Tab ${tabList.length + 1}`,
      content: <Tabs title={tabList.length + 1} deleteTab={deleteTab} getID={getID} />
    };
    setTabList([...tabList, newItem]);
    setCurrentTab(getID);
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
            <div key={ tab.id }>
              { tab.content }
            </div>
          )
        } else {
            return null
        };
      })}
    </div>
  );
};

export default App;
