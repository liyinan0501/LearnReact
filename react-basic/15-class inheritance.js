/* inheritance is between the classes
   Person - class

   Chinese
   African
*/
class Person {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  eat() {
    console.log('all can eat')
  }
}

class Chinese extends Person {
  constructor(name, gender) {
    //father constructor
    super(name, gender)
    this.skin = 'yellow'
  }
  pingpong() {
    console.log('playing pingpong')
  }
}

const c1 = new Chinese('Jack', 40)
console.log(c1)
c1.eat()
c1.pingpong()

class African extends Person {
  constructor(name, gender) {
    super(name, gender)
    this.skin = 'black'
  }
  run() {
    console.log('running fast')
  }
}

const xh = new African('little black', 33)
console.log(xh)
