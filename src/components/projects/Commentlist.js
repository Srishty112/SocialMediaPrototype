import React, { Component } from 'react'
import CommentDetail from './CommentDetail'
export class Commentlist extends Component {

    state={
        comment:'',
        w:''
    }

    _handleKeyDown=(e)=> {
        if (e.key === 'Enter') {
        this.submitComment(this.props.profile, this.props.project, this.props.auth)
        }
      }

    handleChange=(e)=>{
        this.setState({
        [e.target.id]: e.target.value,
        w:e
        })

    }

    deleteComment=(a)=>{
        console.log(a)
    }

    submitComment=(profile, project,auth)=>{
        if(this.state.comment)
        {
        this.props.updateProject(project.id, project, 'comment', {name:profile.firstName, post:this.state.comment, aid:auth.uid} )
        let a= this.props.profile.firstName +' added comment on your project '+ project.title
        let notice= this.props.author.notice;
        if(this.props.author.id !== auth.uid)
        this.props.addnotice(this.props.author.id, a,project.id, notice, this.props.author.noticeno)
        this.setState({comment:''})
        let p= this.state.w
        p.target.value=''}
        
    }

    render() {
        let {list, project, profile, auth, users, author}= this.props
        var i=0;
        return (
            <div >
            
            <div className="row">
                 <div className="col s12 m9 l9 grey lighten-2 blue1">
                 <br/>
                { list && list.map(Comment => {
                    return (
                      <div>
                      <CommentDetail author={author} project= {project} profile={profile} comment={Comment} users={users} i={i} list={list} auth ={auth} />
                      {console.log(i++)}
                      </div>
                      
                    )
                  })}
                  
                 </div>
                 <div className="col s10 m11">
                 <input type="text" id='comment' onChange={this.handleChange}  className="input-area" onKeyDown={this._handleKeyDown}/>
                 </div>
                 <div className="right"> 
                    <button class="btn-floating i22 " type="submit" onClick={()=>this.submitComment(profile, project, auth)}>
                    
                    </button>

                  </div>
                </div>
            </div>
        )
    }
}

export default Commentlist
