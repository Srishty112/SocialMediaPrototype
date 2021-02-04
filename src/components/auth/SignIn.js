import React, { Component } from 'react'
import {connect } from 'react-redux'
import {signIn} from '../../store/actions/projectActions' 
import {Redirect} from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    this.props.signIn(this.state)
    console.log(this.state);
  }
  render() {
    let {auth, autherror}=this.props
    if(auth.uid)return<Redirect to ='/'/>
    return (
      <div className="container abcd">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
            {autherror ? <p>{autherror}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))

  }
}

const mapStateToProps = (state) => {
  return {
    autherror: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(SignIn)