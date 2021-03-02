export {};
// ReturnTypes
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// 関数の戻り値の型を取得できる
type ReturnTypeFromAdd = ReturnType<typeof add>;