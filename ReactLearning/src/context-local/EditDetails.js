import { useContext } from 'react';
import { InfoContext } from './InfoContext';

const styles = {
  infoPanel: { borderStyle: "solid", padding: 8 }
};

const EditDetails = () => {
  const { info, setInfo } = useContext(InfoContext);

  // first version
  // const handleChange = key => event => {
  //   setInfo({ [key]: event.target.value });

  // second version
  // function handleChange(key) {
  //   return function (event) {
  //     setInfo({ [key]: event.target.value });
  //   }
  // };

  // third version = no need

  return (
    <>
      <h1>Edit Details</h1>
      <div style={styles.infoPanel}>

        {/* for first & second version: */}
        {/* <p>Name <input value={info.name} onChange={handleChange("name")} /></p>
          <p>Age <input value={info.age} onChange={handleChange("age")} /></p>
        <p>Email <input value={info.email} onChange={handleChange("email")} /></p> */}

        {/* third version */}
        <p>Name <input value={info.name} onChange={(e) => setInfo({ "name": e.target.value })} /></p>
        <p>Age <input value={info.age} onChange={(e) => setInfo({ "age": e.target.value })} /></p>
        <p>Email <input value={info.email} onChange={(e) => setInfo({ "email": e.target.value })} /></p>

      </div>
    </>
  );
};

export default EditDetails;
