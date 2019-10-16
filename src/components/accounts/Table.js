import React, {Component} from 'react'
import TableRow from './TableRow'
import {axios} from './../../data'

export default class Table extends Component{
  constructor(props){
    super(props)
    this.state={
      tableData: []
    }
  }

  async componentDidMount(){
    await this.getTableData()
  }

  getTableData = () => {
    axios.get('/checking/30', 2000).then((transactions) => {
      this.setState({
        tableData:transactions
      })
      axios.get('/checking/90', 2000).then((transactions) => {
        this.setState({
          tableData:transactions
        })
      })
    })
  }

  render(){
    let transactionKey = 0
    const mappedTransactions = this.state.tableData.map( tr => {
      transactionKey += 1
      return <TableRow data={tr} key={transactionKey}/>
    })
    return(
      <table>
        <thead>
          <tr className="title-row">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {mappedTransactions}
        </tbody>
      </table>
    )
  }
}