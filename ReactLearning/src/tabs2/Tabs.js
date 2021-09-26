import { useState } from "react";

const Tabs = () => {
  // Get and initialize local storage
  const [toggleState, setToggleState] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : 1);

  const toggleTab = (index) => {
    // Set local storage
    localStorage.setItem('items', JSON.stringify(index));
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>Content 1 data</p>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>Content 2 data</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
