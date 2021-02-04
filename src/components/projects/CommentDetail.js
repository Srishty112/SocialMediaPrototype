import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {deleteProject } from '../../store/actions/projectActions'
import {addnotice } from '../../store/actions/projectActions'
import {updateProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
export class CommentDetail extends Component {


    state={
        comment:'',
        w:'',
        a2:'',
    }

    _handleKeyDown=(e, author2, i)=> {
        console.log(author2)
        if (e.key === 'Enter') {
        this.submitComment(author2, i)
        }
      }

    handleChange=(e)=>{
        this.setState({
        comment: e.target.value,
        w:e
        })
    }

    submitComment=(a2, i)=>{
        if(this.state.comment){
            
            let project= this.props.project;
            let a= this.props.profile.firstName +' added comment on your project '+ project.title
            let notice= this.props.author.notice;  
            if(this.props.author.id !== this.props.auth.uid && a2.id!==this.props.author.id)   
            this.props.addnotice(this.props.author.id, a,project.id, notice, this.props.author.noticeno)
            let nno=a2.noticeno;
            let b=this.props.profile.firstName +' replied to your comment on project '+ project.title
            if(a2.id !== this.props.auth.uid)   
            this.props.addnotice(a2.id, b,project.id, a2.notice, nno)
            
            let comments=project.Comments
            let item={aid:this.props.auth.uid, name:this.props.profile.firstName, post:this.state.comment  }
            console.log(comments, "th33th33th33", i)
            comments=comments.slice(0,i).concat(item).concat(comments.slice(i,comments.length))
            console.log(comments)
            this.props.updateProject(project.id, project,'deletecomment', comments)
            this.setState({comment:''})
            let p= this.state.w
            p.target.value=''
            document.getElementById("reply" +this.props.i).style.display = "none"; 
        }       
    }



    deleteComment=(k,project)=>{
        let p= []; var i=1;
        let {list}= this.props;
        for(i; i<=list.length; i++){if(i!==k)p.push(list[i-1])}
        this.props.updateProject(project.id, project, 'deletecomment', p)
    }

    allowReply=(k)=>{

        if(document.getElementById("reply" + this.props.i).style.display === "none")
        document.getElementById("reply" + this.props.i).style.display = "inline"
        else
        document.getElementById("reply" +this.props.i).style.display = "none";
        document.getElementById("Reply" +this.props.i).value = k;

    }


    render() {
        let {comment, i, auth,  project, users}= this.props
        let author=false
        if(users) author = users.find(author => (author.id  === comment.aid ));
        if(author)
        return (
            <div>
            <m class="a">{i++}</m>
            {comment.aid===auth.uid? 
                <Link class="black-text"> <i class="right material-icons" onClick={()=>this.deleteComment(i, project)}>delete</i></Link>
                 : <b class="right blue-text comment grey lighten-2" onClick={()=>this.allowReply(author.firstName)}>Reply</b>}
                 

            {author &&author.image ?
                                                              <Link to={'/profile/'+author.id }><img alt="img" src={author.image} width="35" height="35" class="img left"/></Link>
                                                                : author ?<Link to={'/profile/'+author.id }><i class="small blue-text material-icons left">account_circle</i></Link>: null}
            
            <div class="container white comment"><b>{author.firstName}</b>: {comment.post}
            <m class="a" id={"reply" + this.props.i}>
                <div ><i class="material-icons right" onClick={()=>this.submitComment(author,i)}>send</i>
                    <div class="container">
                    <textarea type="text" id={"Reply" + this.props.i} onChange={this.handleChange} onKeyDown={(e)=>this._handleKeyDown(e, author, i)}>
                    </textarea></div>
                </div></m>
            </div><br/>

            </div>
        )
        else return null
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
      deleteProject:(id)=>{dispatch(deleteProject(id))},
      updateProject:(id,project, job,authid)=>{dispatch(updateProject(id,project, job, authid))},
      addnotice: (authorid, a,projectid, notice, noticeno)=>{dispatch(addnotice(authorid, a,projectid, notice, noticeno))}
    }
  }



export default connect(null, mapDispatchToProps)(CommentDetail)
