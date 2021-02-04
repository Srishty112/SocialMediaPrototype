import React , {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/navbar'
import Trial from './components/Trial'
import CreateProject from './components/projects/createproject'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Projectdetails from './components/projects/projectdetails'
import Dashboard from './components/dashboard/dashboard'
import editproject from './components/projects/editproject'
import profile from './components/projects/profile'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/><br/>
      <Switch>
      <Route path exact='/' component={Dashboard}/>
      <Route path ='/upload' component={Trial}/>
      <Route path ='/SignIN' component={SignIn}/>
      <Route path ='/SignUp' component={SignUp}/>
      <Route path ='/Create' component={CreateProject}/>
      <Route path='/project/:id' component={Projectdetails}/>
      <Route path='/edit/:id' component={editproject}/>
      <Route path='/profile/:id' component={profile}/>
      </Switch>
      <br/>
    </div>
    </BrowserRouter>
  )}
}

export default App;
