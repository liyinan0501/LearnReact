import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
//propTypes
//1.import package
import PropTypes from 'prop-types'

class App extends Component {
  state = {
    car: {
      brand: 'bmw',
      price: 100,
    },
  }
  render() {
    return (
      <div>
        <h3>Typechecking with propTypes</h3>
        <Son list={[]} car={this.state.car}></Son>
      </div>
    )
  }
}

class Son extends Component {
  //2.add propTypes on Son Component
  static propTypes = {
    //type:  array,bool,function,number,object,string
    //React: element
    //isRequired
    //Specific form obj: shape({}) 特定结构对象
    money: PropTypes.number.isRequired,
    list: PropTypes.array,
    car: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }
  render() {
    return (
      <div>
        <div>Money Balance: {this.props.money + 100}</div>
        <div>
          {this.props.car.brand} - {this.props.car.price}
        </div>
        <ul>
          {this.props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

Son.defaultProps = {
  money: 0,
}

createRoot(document.getElementById('root')).render(<App />)
