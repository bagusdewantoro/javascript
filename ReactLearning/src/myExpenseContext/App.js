import { useState, useEffect, useContext } from 'react';
import { GlobalProvider, GlobalContext } from './context/GlobalState';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MonthlyExpense from './MonthlyExpense';
import AddTab from './AddTab';
import Categories from './Categories';

const App = () => {

  const { tabList, currentTab } = useContext(GlobalContext);

  const [categories, setCategories] = useState(localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : [
    {id: 1, desc: 'Not specified', display: 'Not specified'}, {id: 2, desc: 'Income', display: 'Income'}
  ]);
  // handle disabled input tab
  const [isDisabled, setIsDisabled] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  }
  // delete & add tab
  // const deleteTab = (id) => {
  //   const newTabList = tabList.filter((tab) => tab.id !== id)
  //   setTabList(newTabList);
  //   newTabList.length !== 0
  //     ? setCurrentTab(newTabList[newTabList.length - 1].id)
  //     : setCurrentTab('');
  // };

  // const addTab = () => {
  //   const getID = randomId();
  //   const newItem = {
  //     id: getID,
  //     label: `Tab ${tabNumber}`,
  //     content: `This is content number ${tabNumber}`
  //   };
  //   setTabList([...tabList, newItem]);
  //   setCurrentTab(newItem.id);
  //   setTabNumber(tabNumber + 1)
  // }
  // set local storage
  const storeData = () => {
    // localStorage.setItem('tabList', JSON.stringify(tabList));
    // localStorage.setItem('tabNumber', JSON.stringify(tabNumber));
    // localStorage.setItem('currentTab', JSON.stringify(currentTab));
    localStorage.setItem('categories', JSON.stringify(categories));
  };
  useEffect(() => storeData());

  return (
    <GlobalProvider>
      <Router>
        <div>
          <h1>My Expenses</h1>
          <Route path='/categories'>
            <Categories categories={categories} />
          </Route>
          <Route
            path='/'
            exact
            render={(props) => (
              <>
                {/* <AddTab addTab={addTab} /> */}
                <AddTab />
                <Link to='/categories'>
                  <button>Add Category</button>
                </Link>
                <p></p>
                <div>
                  {tabList.map((tab) => (
                    <button key={tab.id} onClick={() => setCurrentTab(tab.id)}>
                      <form onDoubleClick={()=>setIsDisabled(!isDisabled)} onSubmit={handleSubmit}>
                        <input placeholder={tab.label} type='text' disabled={isDisabled} onChange={(e)=>tab.label=e.target.value}/>
                      </form>
                    </button>
                  ))}
                </div>
                {tabList.map((tab) => {
                  if (tab.id === currentTab) {
                    return (
                      <MonthlyExpense
                        key={tab.id}
                        tabContent={tab}
                        // deleteTab={deleteTab}
                        categories={categories}
                      />
                    )
                  } else {
                    return null
                  };
                })}
              </>
            )}
          />
        </div>
      </Router>
    </GlobalProvider>

  );
};

export default App;