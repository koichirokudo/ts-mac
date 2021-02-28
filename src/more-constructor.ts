export {};

class Person {
  // constructor 引数にアクセス修飾子をつけると、自動的に初期化される！
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Taro', 30);
console.log(me);
