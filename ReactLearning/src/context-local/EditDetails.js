const styles = {
    infoPanel: { borderStyle: "solid", padding: 8 }
};

const EditDetails = () => {
  return (
    <>
      <h1>Edit Details</h1>
      <div style={styles.infoPanel}>
        <p>
          Name <input />
        </p>
        <p>
          Age <input />
        </p>
        <p>
          Email <input />
        </p>
      </div>
    </>
  );
};

export default EditDetails;
