import React, {Component} from 'react'

export default class Modal extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    console.log('props',this.props)
    return(
      <div id="modal-container">
        <div id="modal-title">
          <h3>I'm a super annoying Popup!</h3>
        </div>
        <p>Click here to be redirected to some non-sense.</p>
        <button onClick={this.props.closeModal}>No Thanks!</button>
      </div>
    )
  }
}