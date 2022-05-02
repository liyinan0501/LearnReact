import { Component } from 'react'

export default class Hello extends Component {
  render() {
    const { car, money, check } = this.props
    return (
      <div>
        <h3>Class Component</h3>
        <div>{car}</div>
        <div>{money}</div>
        <div>{check ? 'yes' : 'no'}</div>
      </div>
    )
  }
}
