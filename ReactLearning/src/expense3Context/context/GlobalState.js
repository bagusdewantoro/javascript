import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  transactions: [
    { id: 1, text: 'drink', amount: -1000 },
    { id: 2, text: 'fee', amount: 9500 },
    { id: 3, text: 'bonus', amount: 3000 },
    { id: 4, text: 'party', amount: -1200 }
  ]
};

// create context
const GlobalContext = createContext(initialState);

// in order for other components to have access to..
// ..our global state, we need a provider
// PROVIDER COMPONENT
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteList = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  };

  const addList = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions ,
      deleteList,
      addList,
    }}>
      { children }
    </GlobalContext.Provider>
  )
};

export {GlobalContext, GlobalProvider};
