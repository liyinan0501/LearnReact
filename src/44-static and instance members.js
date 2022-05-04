class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log('hello!!')
  }
  static aa = 'bb' //静态
}

Person.aa = 'bb'

const p = new Person('tom', 19)

//实例成员：通过实例调用的属性和方法，叫做实例成员（属性或者方法）
console.log(p)
console.log(p.name)
console.log(p.age)
p.sayHi()

console.log(p.aa) //undefined
//静态成员：通过类或者构造函数本身才能访问的属性或者方法
console.log(Person.aa)
