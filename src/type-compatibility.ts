export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';
console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number;
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

// 構造的部分型
// 代入されるオブジェクトの内部のメンバーが代入するオブジェクトのほうで
// 存在するか、そしてそのメンバーの型に互換性があるかを確認する
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'test');
console.log({ me });
