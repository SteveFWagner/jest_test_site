import React, {Component} from 'react'
import Table from './Table'
import Modal from '../modal/Modal'

export default class Credit extends Component{
  constructor(props){
    super(props)
    this.state = {
      modal:false,
      modalTwo:false
    }
  }

  componentDidMount(){
    setTimeout(
      () => {
        this.setState({
          modal:!this.state.modal,
          modalTwo:!this.state.modalTwo
        })
      },
      500
    )
  }

  handleCloseModal = (prop, value) => {
    this.setState({
      [prop]:value
    })
  }

  render(){
    let modal
    let modalTwo
    if(this.state.modal){
      modal = <Modal closeModal={this.handleCloseModal} modal='modal'/>
    }
    if(this.state.modalTwo){
      modalTwo = <Modal closeModal={this.handleCloseModal} modal='modalTwo'/>
    }
    return(
    <div className="checking-container">
      <div id='ad-container'>
        {modalTwo}
      </div>
      <div className="balance-container">
        <h2>Credit Balance</h2>
        <h2 className="balance">$10,123.45</h2>
      </div>
      <div className="account-number-container">
        <h4>Account Number: </h4>
        <h4 className="account-number">246813579</h4>
        {modal}
      </div>
        <div className="transactions-container">
          <Table/>
        </div>
      </div>
    )
  }

}