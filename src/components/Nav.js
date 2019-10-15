import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{

  render() {
    return(
      <div id="nav-bar">
        <p>First National Fake</p>
        <div>
          <Link to='/'><button>Home</button></Link>
          <Link to='/checking'><button>Checking</button></Link>
        </div>
      </div>
    )
  }
}

export default Nav