import React from 'react'
import { Link } from 'react-router-dom'

const signedoutlinks = (props) => {
  console.log(props, 'signedout')
  if(props.details && props.details.isEmpty===true)
  return (
      <div className="container">
      <ul className="right">
      <li><Link to= '/SignIn'> Log In</Link></li>
      <li><Link to= '/SignUp'> Create New Account </Link></li>
      </ul>
        </div>
  )
  else return null
}

export default signedoutlinks;