import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {updateProject } from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'
// import { Link } from 'react-router-dom';


class editproject extends Component {

  state = {
    title: '',
    content: '',
    Likes: 0,
    c:0
  }

  fun=(project)=>{
    if(this.state.title === '')
    this.setState({
      title: project.title
    })
    if(this.state.content ==='' && this.state.c===0 )
    {this.setState({
      c:1,
      content: project.content
    })}
    
  }
  handleChange = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.id]: e.target.value,
    })
    if(e.target.id==='content') this.setState({c:1})

  }
  handleSubmit = (project,k) => {
    console.log(this.state)
    let m= {title:this.state.title, content: this.state.content};
    console.log(this.state)
    if(this.state.title)
    {
      console.log('HERE I M')
      this.props.updateProject(project.id, m,'update', 0)
    }
      console.log(this.props)
      this.props.history.push(k)
  }

  
  render() {
    console.log(this.props)
    let {auth}= this.props
    let id= this.props.match.params.id 
    let project=0
    if(this.props.project)
    project= this.props.project.find(project => (project.id  === id ));
    var k ="/project/"+project.id;
    if(!auth.uid)return<Redirect to='/SignIn'/>
    if(project)
    return (
      <div className="container" >
      <script type="text/javascript">this.fun(project)</script>
        <form className="white" onSubmit={()=>this.handleSubmit(project, k)}>
          <h5 className="grey-text text-darken-3">Edit Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
             <textarea id="title" class="materialize-textarea" onChange={this.handleChange} >
             {project.title}
             </textarea>

          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" class="materialize-textarea" onChange={this.handleChange} >
            {project.content}</textarea>
          </div>

          
          <div className="input-field">
           <button className="btn pink lighten-1 z-depth-0" onMouseEnter={()=>this.fun(project)} >
           <span className="card-title ">Edit and Save</span>
           </button>
          </div>
        </form>
      </div>
    )
    else return null
  }
}




const mapStateToProps = (state) => {
  return {
    project:state.firestore.ordered.project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps =(dispatch)=>{
      return{
        updateProject:(id,project, job,authid)=>{dispatch(updateProject(id,project, job, authid))}
      }
    }

export default compose(
  firestoreConnect(() => [{collection: 'project', orderBy: ['createdAt', 'desc']}]),
  connect(mapStateToProps, mapDispatchToProps)
  )(editproject)