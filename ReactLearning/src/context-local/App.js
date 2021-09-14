import { useState } from 'react';
import Home from "./Home";
import EditDetails from "./EditDetails";

const styles = {
  header: {
    height: 48,
    backgroundColor: "#ccc"
  },
  headerTitle: {
    display: "inline"
  },
  editButton: {
    float: "right",
    height: 48,
    width: 64
  }
};

function App() {
  const [isEditing, setIsEditing] = useState(false);

  const EditButton = () => (
    <button
      style={styles.editButton}
      onClick={() => setIsEditing(prevValue => !prevValue)}
    >
      {!isEditing ? "Edit Info" : "Save"}
    </button>
  );

  return (
    <div className="App">
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>My Website</h2>
        <EditButton />
      </div>
      {!isEditing ? <Home /> : <EditDetails />}
    </div>
  );
}

export default App;
