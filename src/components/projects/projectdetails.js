import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {deleteProject } from '../../store/actions/projectActions'
import {addnotice } from '../../store/actions/projectActions'
import {updateProject } from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'
import ProjectReactions from './projectReaction'


class projectdetails extends Component {

    state={
      comment: false
    }

    handleClick = () => {
      if (window.confirm('Are you sure you wish to delete this item?'))
      {this.props.deleteProject(this.props.match.params.id)
      this.props.history.goBack()}
    } 

    abc=()=>{
      this.props.history.goBack()
    }
           
      render(){

        console.log(this.props)
        var id= (this.props.match.params.id);
        const kk= '/edit/'+id;
        const {auth, users}= this.props
        const a= this.props.project
        let project=false
        let author=false
        if(a)  project= a.find(project => (project.id  === id ));
        if(project && users) author= users.find(author => (author.id  === project.AuthorId ));

        if(!auth.uid) return <Redirect to='/SignIn'/>
        if(project)
        return (
            <div class="row">
            <div class=" white col l7 m9 s10 offset-s1 offset-l2 offset-m1 project-title">
                <div class="card-content1">
               <div class="title blue-text">{project.title}
                  {
                      auth.uid===project.AuthorId ?
                    <Link to= {kk}> 
                    <button class="right btn-floating edit grey darken-3">
                    <i class="material-icons">edit</i>
                    </button></Link> : null
                  }
                  <button class="right btn-floating grey darken-3 " onClick={this.abc}>
                  <i class="material-icons">clear</i>
                  </button>
                  </div>
                  <div class="row">
                    <div class="pimg col l1">{author &&author.image ?
                                                              <Link to={'/profile/'+author.id }><img alt="img" src={author.image} width="55" height="55" class="img"/></Link>
                                                                : author ?<Link to={'/profile/'+author.id }><i class="medium blue-text material-icons">account_circle</i></Link>: null}
                    </div>

                    <div class="col l6 m7 s12">
                    {author?
                    <b>Posted by <o>{author.firstName} {author.lastName} </o><br/></b>:null}
                    <c class="grey-text-small">{project.createdAt.toDate().toString().slice(0,15)}</c>
                    <br/>
                    <br/>
                    {project.image? <img alt="img" id="k" src={project.image}/>:null}
                    </div>
                    <div class="lap">
                    <p >{project.content}</p>   
                    </div>
                    
                    <div class="col s12 mob">
                    <p >{project.content}</p>   
                    </div>
                    
                    </div><div>
                    <div class="rkn"><hr/>
                <ProjectReactions auth= {auth} author={author} project={project} users={users} updateProject={this.props.updateProject}  addnotice={this.props.addnotice} authorid={project.AuthorId}/>
               </div>
                </div>
                </div>
                
            </div>


        
            <div className='delete col offset-s5'><br/>
            {auth.uid===project.AuthorId ? 
              <button className="btn white black-text z-depth-10" onClick={this.handleClick}>Delete Post</button>
               : null}
              </div>
        </div>
        )
      else return null}
    }


    const mapStateToProps = (state) => {
        return {
          project:state.firestore.ordered.project,
          users:state.firestore.ordered.users,
          auth:state.firebase.auth
        }
      }

    const mapDispatchToProps =(dispatch)=>{
      return{
        deleteProject:(id)=>{dispatch(deleteProject(id))},
        updateProject:(id,project, job,authid)=>{dispatch(updateProject(id,project, job, authid))},
        addnotice: (authorid, a,projectid, notice, noticeno)=>{dispatch(addnotice(authorid, a,projectid, notice, noticeno))}
      }
    }
     
    export default compose(
      firestoreConnect(() => ['project', 'users']),
      connect(mapStateToProps, mapDispatchToProps)
      )(projectdetails)
