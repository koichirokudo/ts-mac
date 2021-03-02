export {};
// Generics
// 型が異なるだけで、やっていることが同じものを共通化する
// const echo = (arg: number) => {
//   return arg;
// };

// const echo = (arg: string) => {
//   return arg;
// }

// <T> は抽象的な型 number 型にもなるし、string型にもなるし、boolean型にもなる
// T と書くのは通例で、T は型引数を表している
// T は抽象的な型なので、現時点ではなんの型を示しているのかは不明の状態である
//
// 抽象的な型をつくれば、他の方でも同じコードが使える
const echo = <T>(arg: T): T => {
  return arg;
};
// <> に型を書く
console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));

// class
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello generics!!').echo());
console.log(new Mirror<boolean>(true).echo());
