export {};

let name = 'Test';

name = 'aaa';

// 実質 const にできる Ham 型
let nickname = 'Ham' as const;
nickname = 'Ham';

// object にも型を変更できる
// as const を書くだけで、全てのプロパティが readonly に変わる。
// ネストしているプロパティもすべて readonly に変わる
let profile = {
  name: 'Atushi',
  height: 178,
} as const;

// profile.name = 'Ham';
// profile.height = 180;
