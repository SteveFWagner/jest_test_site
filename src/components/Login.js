import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Login extends Component{
  render(){
    return(
      <div id="login-inputs-container">
        <input type="text" class="login" id="username" placeholder="Username"/>
        <input type="password" class="login" id="password" placeholder="Password"/>
        <Link to='/home'>
          <button id="signin" class="button">Login</button>
        </Link>
      </div>
    )
  }
}