export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// この場合、 sumUnknown が なんの型かわからないため typescript では
// これは怪しいんじゃないかとコンパイルエラーとなる
// 暫定的に、unknown 型として typeof を使用して確実に型を確認する
// console.log(typeof numberUnknown); // number
// let sumUnknown = numberUnknown + 10; // Object is of type 'unknown'.

// そこで if と typeof で型を比較して実行させる
// 「型ガード」という
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
