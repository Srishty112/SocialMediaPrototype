import React, {Component} from 'react'
import { connect } from 'react-redux'
import Likedby from './Likedby'
import Commentlist from './Commentlist'
//import { Link } from 'react-router-dom'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class projectReactions extends Component {

    state={
      commentlist: true,
      likelist: false
    }

    handleLike=(project)=>{
        this.props.updateProject(project.id,project, 'like', [[this.props.auth.uid], [this.props.profile.firstName]] )
        let a= this.props.profile.firstName +' liked your project '+ project.title
        if(this.props.auth.uid !== this.props.author.id)
        this.props.addnotice(this.props.author.id, a,project.id, this.props.author.notice, this.props.author.noticeno )
      }
  
    handleCommentList=()=>{
        this.setState({
          commentlist: (!this.state.commentlist)
        })
      }

    handleLikeList=()=>{
        this.setState({
          likelist: (!this.state.likelist)
        })
      }

    handleUnlike=(project)=>{
        var i=0;var array=[], array2=[];
        for(i; i<project.Likedbyid.length; i++)
        if(project.Likedbyid[i] !==this.props.auth.uid){array.push(project.Likedbyid[i]);array2.push(project.Likedby[i]) }
        this.props.updateProject(project.id,project, 'unlike', [array, array2] )
      }

    render(){
        let Liked=false; var i=0;
        
        let {auth, project, profile,users, author}= this.props
        for(i; i<project.Likedbyid.length; i++){if(project.Likedbyid[i]===auth.uid) Liked=true}


        return(


        <div>
        {Liked===false ?<div class="btn-floating left li z-depth-0" onClick={()=>this.handleLike(project)}></div>
        : <div class=" btn-floating left li2 z-depth-0" onClick={()=>this.handleUnlike(project)}></div>}
        <div class='grey-text-small'>
        <u  onClick={this.handleLikeList}  >Likes ({project.Likes})</u>
        {this.state.likelist===true ?<div class="container"> <Likedby list= {project.Likedby}/></div> : null}
        </div>

               <br/>
        
               <div class=" btn-floating left li3 z-depth-0" onClick={this.handleCommentList}></div>
               <div>
               <u class='grey-text-small blue-text' onClick={this.handleCommentList} ><b>Comments ({project.Comments.length})</b></u>
               {this.state.commentlist===true ? 
                <Commentlist list={project.Comments} author={author} addnotice={this.props.addnotice} project={project} profile={profile} users={users} auth={auth} updateProject={this.props.updateProject}/>
             : null}
               </div>
        
        </div>)
    }
}

const mapStateToProps=(state)=>{
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }


  export default compose(
    firestoreConnect(() => ['project']),
    connect(mapStateToProps)
    )(projectReactions)
