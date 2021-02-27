export {};

// object の制約は甘いため、値が上書きされたときに気づけない
// これはあまり使わないこと、使ってもいいけど詳細にした方がいい
let profile1: object = { name: 'kudo' };
profile1 = { birthYear: 1994 };

// {} でオブジェクト制約できる
// anotaion の中で宣言されていないプロパティはエラーが表示される
// オブジェクトのプロパティに対して型を設定できる
let profile2: {
  name: string;
} = { name: 'kudo' };
profile2 = { name: 'test' };
