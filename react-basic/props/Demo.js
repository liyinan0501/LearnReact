import { Component } from 'react'

//函数组件
// props 支持解构
// const {car, money, check} = this.props
export default function Demo({ car, money, check }) {
  return (
    <div>
      <h3>Demo Component</h3>
      <div>{car}</div>
      <div>{money}</div>
      <div>{check ? 'yes' : 'no'}</div>
    </div>
  )
}
