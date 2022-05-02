import { Component } from 'react'

class Hello1 extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      money: this.props.money + 100,
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>I am Hello1 class component</h3>
        <div>{this.state.money}</div>
      </div>
    )
  }
}
export default Hello1
