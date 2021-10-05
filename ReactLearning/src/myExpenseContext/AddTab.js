import { useState, useContext,  useEffect } from 'react';
import { GlobalContext } from './context/GlobalState';

const AddTab = () => {
  const [tabList, setTabList] = useState(localStorage.getItem('tabList') ? JSON.parse(localStorage.getItem('tabList')) : []);
  const [tabNumber, setTabNumber] = useState(localStorage.getItem('tabNumber') ? JSON.parse(localStorage.getItem('tabNumber')) : 1);

  const { addTab } = useContext(GlobalContext);
  const addButton = () => {
    const randomId = () => Math.floor(Math.random() * 100000 + 1);
    const getID = randomId();
    const newItem = {
      id: getID,
      label: `Tab ${tabNumber}`,
    };
    addTab(newItem);
    setCurrentTab(newItem.id);
    setTabNumber(tabNumber + 1)
  }

  const storeData = () => {
    localStorage.setItem('tabNumber', JSON.stringify(tabNumber));
  };
  useEffect(() => storeData());

  return (
    <button onClick={addButton}>
      Add Tab
    </button>
  )
};

export default AddTab;
