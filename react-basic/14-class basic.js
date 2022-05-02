import React from 'react'
import ReactDOM from 'react-dom'

/* class traditional */
// function Teacher(name, age) {
//   this.name = name
//   this.age = age
// }
// Teacher.prototype.sayHi = function () {
//   console.log('Hello, I am ' + this.name)
// }
// const stu = new Teacher('Jack', 30)
// console.log(stu)
// stu.sayHi()

// ES6 class
class Teacher {
  //constructor
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log('Hello, I am ' + this.name)
  }
}

const stu = new Teacher('Jack', 30)
console.log(stu)
stu.sayHi()
