export {};

class Person {
  // class の 型anotation
  name: string;
  age: number;

  // constructor は return しないため return の anotation は不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
