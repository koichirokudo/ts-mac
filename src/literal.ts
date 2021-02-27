export {};

// 文字列と数値のリテラル型はよく使う

// 型が文字列なのに数字が入った場合
// : '日' '日'以外はエラーとなる すごい。
// 文字列のリテラル型
// : '日' | '月' | '火' | '水' | '木' | '金' | '土'
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31';  // error

// 数字列のリテラル型
// : 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13; // error

// boolean型
// : true これだと false は代入できなくなる
let TRUE: true = true;
// TRUE = false; // error
