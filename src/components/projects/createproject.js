import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {createProject } from '../../store/actions/projectActions'
import ImageUpload, {k} from '../ImageUpload';



class createproject extends Component {
  
  state = {
    title: '',
    content: '',
    image:'',
    Likes: 0,
    AuthorId:this.props.auth.uid,
    AuthorFirstName: this.props.profile.firstName,
    AuthorImage: this.props.profile.image,
    AuthorLastName: this.props.profile.lastName
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,     
    })
  }

  handleClick=()=>{
      if(document.getElementById("imgup").style.display === "none")
      document.getElementById("imgup").style.display = "inline"
      else
      document.getElementById("imgup").style.display = "none";
  }
  
  handleDone = (k) => {
   if(this.state.title)
   {
   if(k)
    this.setState({
      image: k
    })
    document.getElementById("element1").style.display = "none";
    document.getElementById("element2").style.display = "inline";
  }
    
  }

  handlePost=()=>{
    if(this.state.title)
    { 
      console.log(this.state) 
      this.props.createProject(this.state);
      this.props.history.goBack()
    }
    else 
    {
      document.getElementById("element2").style.display = "none";
      document.getElementById("element1").style.display = "inline";
    }
    
  }

  handleCancel=()=>{
    this.props.history.goBack()
  }
  
  render() {
    const {auth}= this.props;
    if(!auth.uid)return  <Redirect to='/SignIn'/>
    return (
      
      <div className="row">
        <div className="white card col l6 m8 s12 offset-l3  offset-m2 abc" >
        <div class="card-content">
          <b className="npt">Creating a new project
           <i class="small material-icons black-text right" onClick={this.handleCancel}>cancel</i>
           </b><br/><hr/>
           <div class="row">
          <div className="input-field col l11  s12">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' class="grey lighten-2" onChange={this.handleChange} />
          </div>
          <div class="ab"><br/><i class="material-icons blue-text">create</i></div>
          
          <div className="input-field col s12 l11">
            <textarea id="content" class="materialize-textarea grey lighten-2" onChange={this.handleChange} >
            </textarea>
            <label htmlFor="content">Project Content</label>
          </div>   
          <div class="ab"><br/><br/><br/><i class="material-icons blue-text">create</i></div>         
          
          <div className="input-field grey-text col s11">
          <k onClick={this.handleClick}>
          <m class="btn-floating img1 small" ></m>
          <b> {' '}Add Images </b></k>
          <div class="a" id="imgup"><ImageUpload/></div>
          </div>
          </div>
          <k id="element1"><button className="btn pink right z-depth-2" onClick={()=>this.handleDone(k)} >1.Done</button>
          </k>     
          <k1 id="element2"><button class="a btn pink z-depth-2 right" onClick={this.handlePost} >2.Post Project</button>
           </k1><br/><br/>
        </div>
      </div>
      </div>
    )
  }
}


const mapDiaptchToProps=(dispatch)=>{
  return{
    createProject:(project)=>{dispatch(createProject(project))}
  }

}

const mapStateToProps=(state)=>{
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}


export default connect(mapStateToProps, mapDiaptchToProps)(createproject)