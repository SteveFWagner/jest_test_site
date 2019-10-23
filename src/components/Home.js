import React, {Component} from 'react'

class Home extends Component{
  constructor(){
    super()
    this.state = {
      content : <h3 id="loading">Loading...</h3>
    }
  }
  
  componentDidMount(){
    setTimeout(
      () => {
        this.setState({
          content:<h3>This is the Home page.</h3>
        })
      },
      2000
    )
  }

  render() {
    let content = this.state.content
    return(
      <div id="home">
        {content}
      </div>
    )
  }

}

export default Home