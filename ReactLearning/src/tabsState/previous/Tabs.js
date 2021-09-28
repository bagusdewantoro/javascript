const Tabs = ({ title, deleteTab, getID }) => {
  return (
    <div>
      <h2>Content {title}</h2>
      <p>This is content number {title}</p>
      <button onClick={() => deleteTab(getID)}>
        Delete Tab
      </button>
    </div>
  )
};

export default Tabs;
