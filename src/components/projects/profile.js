import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import Projectsummary from './projectsummary'
import Allprofiles from './Allprofiles'


class profile extends Component {


  
    render(){
        const {auth,  projects, users}= this.props;
        const id= this.props.match.params.id;
        let person=false; let no=0;
        if(users) person= users.find(person => (person.id  === id ))
        if(person)console.log(person, users)

       
        console.log(id)
        if(!auth.uid)return  <Redirect to='/SignIn'/>
            return (
              <div>
                <div class="row profile">
                <div class="col l7 s10 offset-l1 offset-s1 white col1">
                <div class="title green-text pcont"> { (person && auth.uid===person.id) ? <c><i class="material-icons">pan_tool </i> Hello,
                </c>:null}
                {person ?<c>{person.firstName} {person.lastName}
                {person.image ?<img alt="img" src={person.image} width="50" height="50" class="img right"></img>
                :<i class="small material-icons right">account_circle</i>}

                </c>: null}
                </div>
                
                { (person && auth.uid===person.id) ?
                <div class="pcont row">
                
                <div class="col s10">
                <textarea id="content1" placeholder="Got something new to share?.." class="materialize-textarea grey lighten-2"></textarea>
                </div>
                <div class="col"><i class="material-icons blue-text">edit</i></div>
                </div> : <br/>}
                <div class="leftright">
                <div class="trapezoid ">Posts</div>

                <div class="plist row grey lighten-2"><div class="col s11">
                {
                  projects && projects.map(project => {
                  if(project.AuthorId === id)
                  return (
                    <c>
                    {console.log(no++)}<Projectsummary project={project} users={users}  key={project.id} /></c>
                                        
                  ) 
                  else return null
                })}</div></div></div>

                  
                </div>
                
                <div class="col l3 s10 m5 offset-m3 offset-s1 grey lighten-3">
                <Allprofiles users={users} aid={auth.uid}/>  
                </div>

                </div></div>
              )  
            }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return {
      auth: state.firebase.auth,
      projects:state.firestore.ordered.project,
      users:state.firestore.ordered.users,
      profile:state.firebase.profile
    }
  }

  //export default connect(mapStateToProps)(createproject)
  export default compose(
    firestoreConnect(() => [{collection: 'project', orderBy: ['createdAt', 'desc']}, {collection: 'users', orderBy: ['joinedon', 'asc']}]),
    connect(mapStateToProps)
    )(profile)