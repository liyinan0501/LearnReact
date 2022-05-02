//类实例语法

class Person {
  // constructor() {
  //   this.name = 'jack'
  //   this.age = 28
  // }
  // say() {
  //   console.log('hello!')
  // }
  // 以上 say方法不在实例上，而是在原型上。

  name = 'jace'
  age = 28
  say = () => {
    console.log('hello!')
  }
  // 以上 say方法在实例上
}

const p = new Person()
console.log(p)
p.say()
