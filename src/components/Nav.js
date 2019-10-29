import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{

  render() {
    return(
      <div id="nav-bar">
        <p>First National Fake</p>
        <div>
          <Link to='/home'>
            <button>Home</button>
          </Link>
          <Link to='/checking'>
            <button className='account-checking'>Checking</button>
          </Link>
          <Link to='/credit'>
            <button>Credit</button>
          </Link>
          <Link to='/'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Nav