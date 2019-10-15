import React, {Component} from 'react'
import Table from './Table'

export default class Checking extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
    <div className="checking-container">
      <div className="balance-container">
        <h2>Checking Balance</h2>
        <h2 className="balance">$10,123.45</h2>
      </div>
      <div className="account-number-container">
        <h4>Account Number: </h4>
        <h4 className="account-number">246813579</h4>
      </div>
        <div className="transactions-container">
          <Table/>
        </div>
      </div>
    )
  }

}