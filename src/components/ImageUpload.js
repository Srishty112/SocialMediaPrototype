import { connect } from 'react-redux'
import React, { useState } from "react";
import { storage } from "../config/fbConfig";


export let k=0;

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);



  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  
  

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
    console.log(url)
    
  };




  console.log("image: ", image)
  return (
    <div class="m10 mar">
      Progress Bar<br/>
      <progress value={progress} max="100" class="grey"/>
      <c class="right">
      <input type="file" onChange={handleChange}/>
      <button onClick={handleUpload}>Upload</button></c>
      <br />
      <m class="a"> {k=url} </m> 
    </div>
    
  );
};

const mapStateToProps=(state)=>{
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
  }
}


export default connect(mapStateToProps)(ImageUpload)
