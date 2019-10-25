import React, {Component} from 'react'

class Home extends Component{
  constructor(){
    super()
    this.state = {
      content : <h3 id="loading">Loading...</h3>,
      otherContent : []
    }
  }
  
  async componentDidMount(){
    setTimeout(
      () => {
        this.setState({
          content:<h3 id="home-page">This is the Home page.</h3>
        })
      },
      2000
    )
    setTimeout(
      () => {
        this.setState({
          otherContent:<h4 id="other-content">This is some other content.</h4>
        })
      },
      2200
    )
  }

  render() {
    let content = this.state.content
    let otherContent = this.state.otherContent
    return(
      <div id="home">
        {content}
        {otherContent}
      </div>
    )
  }

}

export default Home