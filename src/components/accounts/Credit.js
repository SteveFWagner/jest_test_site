import React, {Component} from 'react'
import Table from './Table'
import Modal from '../modal/Modal'

export default class Credit extends Component{
  constructor(props){
    super(props)
    this.state = {
      modal:false
    }
  }

  componentDidMount(){
    setTimeout(
      () => {
        this.setState({
          modal:!this.state.modal
        })
      },
      500
    )
  }

  handleCloseModal = () => {
    this.setState({
      modal:false
    })
  }

  render(){
    let modal
    if(this.state.modal){
      modal = <Modal closeModal={this.handleCloseModal}/>
    }
    return(
    <div className="checking-container">
      <div>
        {modal}
      </div>
      <div className="balance-container">
        <h2>Credit Balance</h2>
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