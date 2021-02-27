export {};
// enum 型 複数形で書くこと
// 自動的に連番を付与してくれる！
// でも1月だったら、1 としたいとき
// = 1 を先頭に入れるだけで数値を列挙できる。。もうすごい！
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January); // 0
console.log(Months.February); // 1
console.log(Months.December); // 11

enum COLORS {
  RED = '#FF000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FFFF00'
}

let green = COLORS.GREEN;
console.log({ green });

// error が出るようになる
// vanilla js だとエラーがでない
// COLORS.YELLOW; // Property 'YELLOW' does not exist on type 'typeof COLORS'.ts(2339)

// enum 型は使う直前で付け足すことができる
enum COLORS {
  YELLOW = '#FFFF00',
  // GRAY, // 初期化をしないとエラーを出力してくれる！
}
COLORS.YELLOW;
