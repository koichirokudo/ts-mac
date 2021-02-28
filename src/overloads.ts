export {};

// シグネチャ
// ここで型安全している他の型がきたら、コンパイルエラーとなる
function double(value: number): number;
function double(value: string): string;

// 数値を２倍
// 同じ関数名だと Duplicate function implementation.ts(2393) が出力される
// この場合、シグネチャを使って、関数の概略を書く
// そして、関数の実体の anotation は any 戻り値の anotation も any と書く
// なぜ any と書くのか → シグネチャですでに anotation しているため2種類(number, string)のみ許可しているため
// 型安全はできている
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

// 文字列を２倍
// function double(value: string): string {
//   return value + value;
// }
console.log(double(100));
console.log(double('Go '));
// console.log(double(true)); // コンパイルエラーになるため、 number か string でしかない
