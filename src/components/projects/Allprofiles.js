import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export class Allprofiles extends Component {
    

    render() {
        const {users, aid}= this.props 
        return (
            <div className="grey lighten-3 all-profile ">
            <br/><div class="stitle black-text">Peeps you may know!</div><hr/>
            <div>
            {
                users && users.map(user=>{
                    if(user.id !==aid)
                    return(<div className="card pep-card white">
                    <Link to= {"/profile/" + user.id }>
                    <div class="row"> 
                    <div class="col s2">
                    {user&& user.image?
                        <img alt="img" src={user.image} width="43" height="43" class="img"/>
                        :<i class="medium blue-text material-icons">account_circle</i>}
                    </div>

                    <div class="col s7">                 
                    <div class="center"><b class="black-text pname"> {user.firstName} {user.lastName}</b><br/><m2 class="grey-text-small ">Joined {user.joinedon ? moment(user.joinedon.toDate()).fromNow():null}</m2></div>
                    </div>
                    <div>
                    <i class="material-icons green white-text add "> add</i><i class="material-icons rot blue-text"> send</i>
                    </div>
                    </div></Link>
                    </div>)
                    else return null
                })
            }
            </div>
            </div>
            
        )
    }
}

export default Allprofiles
