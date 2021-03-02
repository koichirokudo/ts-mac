export {};
// ReturnTypes
function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// 関数の戻り値の型を取得できる
type ReturnTypeFromAdd = ReturnType<typeof add>;

// conditionaltypeは無数の条件を書くことができる
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // infer は条件に書くことができる特殊なキーワード infer R は戻り値の型を表している
  ? R
  : any;
// infer は推論するという意味。推論した結果をRに代入するてきな意味
// Rという戻り値の型を指定することができる。
