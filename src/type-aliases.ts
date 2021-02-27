export {};

// alias の先頭は大文字
// Mojiretsu は string 型の別名ということになる
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'kudo',
  age: 26,
};

// object でも使える
type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'kudo',
  age: 26,
};

// これでもできる！これはいい！
// リファクタリングする際に、これが使えるし
// example1 が変更された場合でも自動的に型が変更される！
type Profile2 = typeof example1;
