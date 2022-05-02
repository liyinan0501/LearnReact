class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }
  eat() {
    console.log('I can eat')
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name, type)
    this.leg = 4
  }
  bark() {
    console.log('wof wof')
  }
}

class Bird extends Animal {
  constructor(name, type) {
    super(name, type)
    this.leg = 2
  }
  fly() {
    console.log('flying....')
  }
}

const xg = new Dog('Bagong', 'Goldenretriver')
console.log(xg)
xg.bark()

const xb = new Bird('littleBird', 'xique')
console.log(xb)
xb.fly()
