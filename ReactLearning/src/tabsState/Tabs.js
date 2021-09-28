const Tabs = ({ tabContent, deleteTab }) => {
  return (
    <div>
      <h2>Content {tabContent.label}</h2>
      <p>{tabContent.content}</p>
      <button onClick={() => deleteTab(tabContent.id)}>
        Delete Tab
      </button>
    </div>
  )
};

export default Tabs;
