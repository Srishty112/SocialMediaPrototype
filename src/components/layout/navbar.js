import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Notification from '../dashboard/notification'
import {deletenoticeno} from '../../store/actions/projectActions'
import Signedoutlinks from './signedoutlinks'
import {signOut} from '../../store/actions/projectActions' 
import {connect} from 'react-redux'


class Navbar extends Component{
render() {


  const handleClick=(props)=>{
    if (window.confirm('Are you sure you wish to Log Out?'))
    props.signOut()
  }

  let handlebell=()=>{
    this.props.deletenoticeno(this.props.details.uid)
    if(document.getElementById('notice').style.display==="inline")
    document.getElementById('notice').style.display="none"
    else
    {document.getElementById('notice').style.display="inline";
    document.getElementById('dropdown').style.display="none"}
  }

  let drop=()=>{
    if(document.getElementById('dropdown').style.display==="inline")
    document.getElementById('dropdown').style.display="none"
    else
    {document.getElementById('dropdown').style.display="inline";
    document.getElementById('notice').style.display="none"}
  }
  const {profile, details}= this.props
  console.log(this.props)
  const k= '/profile/' +details.uid 



  //signedin links

  if(details.isEmpty !== true)
  return (
    <div>
    <div className="navbar grey darken-3" >
    <Link to="/"><i class="material-icons white-text left home small">home</i>
    </Link>
    <Link to= '/Create'>
    <ul class="left npbtn pink white-text"><b class="pink-text">......</b> Create New Project</ul>
    </Link>    
    {profile.image ? <img alt="img" src={profile.image} width="50" height="50" class="img" onMouseEnter={drop} onClick={drop} />:
    <i class="medium material-icons img white-text"  onMouseEnter={drop} onClick={drop}>account_circle</i>}
    
   <Link> <m1 class="white-text right"><br/><i class="material-icons small" onClick={handlebell}>notifications</i> 
    { profile.noticeno ? <b class="nono">{profile.noticeno}</b>: null}
    </m1></Link>
    
    <div class="right dropdown card a" id="dropdown" onMouseLeave={drop} >
    <Link to= {k} class="black-text"> Mannage Account<hr/></Link>
    <Link to= '/upload'class="black-text"> Update Profile Pic<hr/></Link>
    <Link onClick={()=>handleClick(this.props)} class="black-text"> Log Out </Link>
    </div>
       
    </div> 
    <div class="a" id="notice" onMouseLeave={handlebell}> <Notification profile={profile}/> </div> 
    
    </div>
  )
  
  
  
  
  else return(
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Signedoutlinks details={details}/>
      </div>
    </nav>)
}
}

const mapStatetoProps=(state)=>{
  return {
    details:state.firebase.auth,
    profile:state.firebase.profile
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    signOut: ()=> dispatch(signOut()),
    deletenoticeno:(id)=>{dispatch(deletenoticeno(id))},
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar);

