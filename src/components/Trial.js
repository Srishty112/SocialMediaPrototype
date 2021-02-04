import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import React, { useState } from "react";
import { storage } from "../config/fbConfig";
import {updateProject } from '../store/actions/projectActions'
import {Redirect} from 'react-router-dom'



const Trial = (props) => {
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
    document.getElementById("10").style.display = "inline";
    
  };

  const k= './profile/'+props.auth.uid

  const handleDP=(url)=>{
    if (window.confirm('Are you sure?')){
    props.updateProject(props.auth.uid, url,'dp', 0)
    props.history.push(k)}

  }

  console.log("image: ", image)
  if(!props.auth.uid)return(<Redirect to='/SignIn/'/>)
  return (
    <div class="container row">
    <div class=" white col l8 s12 m10 offset-l2">
      Progress Bar<br/>
      <progress value={progress} max="100" class="grey"/>
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <button class="btn" onClick={handleUpload}>Upload</button>
      <br />
      
      <img  src={url || "https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg"}
       alt="firebase" width="100" height="100" />
       <k1 id="10"><button class="btn a" onClick={()=>handleDP(url)} >Update</button></k1>
    </div></div>
    
  );
};

const mapStateToProps=(state)=>{
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile:state.firebase.profile
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    updateProject:(id,project, job,authid)=>{dispatch(updateProject(id,project, job, authid))}
  }
}

//export default connect(mapStateToProps)(createproject)
export default compose(
  firestoreConnect(() => ['project']),
  connect(mapStateToProps, mapDispatchToProps)
  )(Trial)
