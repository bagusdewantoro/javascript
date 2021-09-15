import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
  transactions: [
    { id: 1, text: 'fee', amount: 15000 },
  ]
};

// LOCAL STORAGE
const localState = JSON.parse(localStorage.getItem("items"));

// create context
const GlobalContext = createContext(initialState);

// ============================================================
// in order for other components to have access to..
// ..our global state, we need a provider
// PROVIDER COMPONENT
const GlobalProvider = ({ children }) => {
  // without LOCAL STORAGE:
  // const [state, dispatch] = useReducer(AppReducer, localState);

  // with LOCAL STORAGE:
  const [state, dispatch] = useReducer(AppReducer, localState || initialState);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

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
// ============================================================

// format number
const numberFormat = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


export {GlobalContext, GlobalProvider, numberFormat};
