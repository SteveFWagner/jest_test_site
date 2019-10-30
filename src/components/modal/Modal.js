import React, {Component} from 'react'

export default class Modal extends Component{
  render() {
    const containerId = `${this.props.modal}-container`
    const titleId = `${this.props.modal}-title`
    const buttonId = `${this.props.modal}-button`
    return(
      <div id={containerId}>
        <div id={titleId}>
          <h3>I'm a super annoying Popup!</h3>
        </div>
        <p>Click here to be redirected to some non-sense.</p>
        <button id={buttonId} onClick={() => this.props.closeModal(this.props.modal, false)}>No Thanks!</button>
      </div>
    )
  }
}