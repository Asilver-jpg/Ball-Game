import React from 'react'
//some comment to try out the merge
class CurrentScore extends React.Component{
  state = {
    score: 0
  }
  scorePoints = () => {
    this.setState({score: this.state.score + 25})
}
componentDidMount(){
  this.interval = setInterval(this.scorePoints, 3000)
}
componentWillUnmount(){
  this.props.finalScore(this.state.score)
  clearInterval(this.interval)
  //post final score here
  fetch("http://localhost:3001/api/v1/scores",{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({score: this.state.score, id:1} )
  })
}
  render() {
    return(
      <div className='score'>
        <h1 className='score-text'>Score
        <br/>
        {this.state.score}
        </h1>
      </div>
    )
  }
}
export default CurrentScore