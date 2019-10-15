import React, {Component} from 'react'

export default class TableRow extends Component{
  
  render(){
    const {date, description, amount} = this.props.data
    return(
      <tr className="transaction">
        <td className="transaction-date">{date}</td>
        <td className="transaction-desc">{description}</td>
        <td className="transaction-amount">{amount}</td>
      </tr>
    )
  }
}