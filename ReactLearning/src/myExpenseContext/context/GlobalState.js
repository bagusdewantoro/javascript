import React, { createContext, useReducer, useEffect } from 'react';
import { tabReducer } from './AppReducer';

// initial state
const initialState = {
  tabList: [
    { id: 1, label: 'Tab 1' },
  ],
  currentTab: ''
}

// local storage
const localStateTab = JSON.parse(localStorage.getItem('tabList'));
const localStateCurrentTab = JSON.parse(localStorage.getItem('currentTab'));


// create context
const GlobalContext = createContext(initialState);

// provider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tabReducer, localStateTab || initialState);
  const [state, dispatch] = useReducer(tabReducer, localStateCurrentTab || initialState);
  useEffect(() => {
    localStorage.setItem('tabList', JSON.stringify(state));
    localStorage.setItem('currentTab', JSON.stringify(state));
  }, [state]);



  // actions
  const deleteTab = (id) => {
    dispatch({
      type: 'DELETE_TAB',
      payload: id
    });
  };
  const addTab = (newItem) => {
    dispatch({
      type: 'ADD_TAB',
      payload: newItem
    });
  };

  return (
    <GlobalContext.Provider value={{
      tabList: state.tabList,
      currentTab: state.currentTab,
      deleteTab,
      addTab
    }}>
      { children }
    </GlobalContext.Provider>
  )
};

export { GlobalContext, GlobalProvider };
