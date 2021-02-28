export {};

// クラスのプロパティを読み取り専用とする
class VisaCard {
  // readonly は public は書く必要はないが
  // 書いた方がよいと思う。明示的した方がいい
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('kudo');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'test'; // readonly なので変更できないエラーができる
