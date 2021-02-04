import moment from 'moment'
import React  from 'react'
import { Link } from 'react-router-dom'

const Notification=(props) =>{
    const {profile} = props;
    console.log(props)
    return(
      <div class="white dropdown z-depth-2">
      {
        profile && profile.notice && profile.notice.map(notification=>{
          return(
            <div class="grey-text-small">
            <Link to={'/project/' +notification.id }><b>{notification.notice}</b></Link><br/>
            {moment(notification.date.toDate()).fromNow()}<hr/>
            </div>
          )
        })
      }
      
      </div>
    )
}


export default Notification;