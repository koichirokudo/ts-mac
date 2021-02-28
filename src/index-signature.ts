export {};
// index signatures
// object のインデックスを anotation するためのもの

// 型が長いときには interface で型 anotation してもいいと思う
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'Ham', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
// let profile: { [index: string]: string | number } = {};

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
