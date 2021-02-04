import React , {Component} from 'react'
import Projectlist from '../projects/projectlist'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

class dashboard extends Component{

    render(){
        const {projects, auth, users}= this.props
        if(!auth.uid) return <Redirect to='/SignIn'/>

        return(
            <div className="dashboard">
                <div className="row">
                 <div className="col l6">
                 <Projectlist projects= {projects} users={users} />
                 </div>
                  
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      projects: state.firestore.ordered.project,
      users: state.firestore.ordered.users,
      auth:state.firebase.auth
    }
  }
  
  export default compose(
    firestoreConnect(() => [{collection: 'project', orderBy: ['createdAt', 'desc']}, 'users']),
    connect(mapStateToProps)
    )(dashboard)
