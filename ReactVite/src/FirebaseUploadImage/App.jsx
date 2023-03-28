// Basic code from Firebase Upload Image https://blog.logrocket.com/firebase-cloud-storage-firebase-v9-react/
// Additional code from Preview image onChange https://blog.logrocket.com/using-filereader-api-preview-images-react/
// The additional code is commented with "Additional start =========="

import './App.css';
import { useState, useEffect } from "react";
import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const imageMimeType = /image\/(png|jpg|jpeg)/i;


function App() {
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  // Additional start ==========
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  // Additional end ==========

  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.byAdditionalransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
        });
      }
    );

    setFileDataURL(null)
  }


  // Additional start ==========
  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }

  useEffect(() => {
    let fileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
  }, [file])
  // Additional end ==========

  return (
    <div className="App">

      <form 
        className="form"
        onSubmit={handleSubmit} 
      >

        {/*Additional start ==========*/}
        <input
          className="input"
          type="file"
          id='image'
          accept='.png, .jpg, .jpeg'
          onChange={changeHandler}
        />
        {/*Additional end ==========*/}

        <button type='submit'>Upload</button>
      </form>

      {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }

      {/*Additional start ==========*/}
      
      { 
        fileDataURL 
        ? <p className="img-preview-wrapper">
            <p>Preview Image:</p>
            {
              <img src={fileDataURL} alt="preview" height={200} />
            }
          </p> 
        : null
      }
      {/*Additional end ==========*/}

      {
        imgUrl &&
        <p>
          <p>Uploaded Image:</p>
          <img src={imgUrl} alt='uploaded file' height={200} />
        </p>
      }

    </div>
  );
}

export default App;