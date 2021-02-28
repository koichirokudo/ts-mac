export {};

// tsconfig.json の
// strictNullChecks: true になっていると age: null でコンパイルエラーが出力される
// 一般的には true にすること
// nullable とは null が許容されてしまい何にでも null が入れられる状態のこと
// nullable な型は union 型を使用して局所的に対処すること
let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null,
};
