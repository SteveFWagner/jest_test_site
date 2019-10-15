import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Checking from './components/accounts/Checking'

export default(
  <Switch>
    <Route exact path ='/' component={Home}/>
    <Route path='/checking' component={Checking}/>
  </Switch>
)