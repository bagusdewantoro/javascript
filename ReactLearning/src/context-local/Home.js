
const styles = {
  infoPanel: { borderStyle: "solid", padding: 8 }
};

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Info info={{}} />
    </>
  );
};

const Info = ({ info }) => (
  <div style={styles.infoPanel}>
    <p>Name: {info.name}</p>
    <p>Age: {info.age}</p>
    <p>Email: {info.email}</p>
  </div>
);

export default Home;
