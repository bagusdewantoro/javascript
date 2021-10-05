let tabReducer = (state, action) => {
  switch(action.type) {

    case 'DELETE_TAB':
      return {
        ...state,
        tabList: state.tabList.filter(tab => tab.id !== action.payload)
      }

    case 'ADD_TAB':
      return {
        ...state,
        tabList: [action.payload, ...state.tabList],
        currentTab: action.payload.id
      }

    case 'CURRENTTAB':
      return {
        ...state,
        currentTab: action.payload.id
      }

    default:
      return state;
  }
};

export { tabReducer };
