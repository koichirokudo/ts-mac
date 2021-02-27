export {};

// modules の export {} を利用しないとグローバル空間に定義されてしまうので
// let name が error となってしまう。
// モジュールシステムを export{} する必要がある
let name = "typescript";
// : boolean などで型をつけることができる
// annotation という
let isFinished: boolean = true;
isFinished = false;
// isFinished = 1; // is not assignable error
console.log({ isFinished });

