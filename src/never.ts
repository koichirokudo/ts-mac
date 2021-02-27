export {};

// 例外が発生するので、その場合、return の実行がない場合は
// 呼び出し元に戻ってこない場合は : never を書く
// void と never の違い
// void は戻ってくる
// never は戻ってこない
// : never を使う
function error(message: string): never {
  throw new Error(message)
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined; // void は値の概念があるため、値を代入できる
let bar: never = error('only me!'); // never には値という概念がないため、 error になる null も同じ
// 唯一 never に代入できる値がある。 error('only me'); はできる。利用シーンは想像できない
