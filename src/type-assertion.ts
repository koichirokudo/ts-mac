export {};

let name: any = 'Ham';
// 型 assertion
// any 型に対して適切に型を変換する
// 2パターンある
// name.length as number;
// (name as string).length;
// let length = (<string>name).length; //非推奨 React とかぶる
// これで想定外の型が代入されることを防止できる
let length = (<string>name).length;

// length = 'foo'; // error
