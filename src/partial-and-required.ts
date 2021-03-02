export {};
// partial
// すべてのプロパティをオプショナルにしたいとき、
// 追加したものもオプショナルにしたいときに便利
type Profile = {
  name: string;
  age: number;
};

type PartialType = Partial<Profile>;
// 以下と同じように、すべてのプロパティと
// 追加されたプロパティに対して、オプショナル ? をつけることができる
// type PartialType = {
//   name?: string | undefined;
//   age?: number | undefined;
// }

// required
// 以下の状態から、すべて必須なプロパティに変えたいとき
// 追加したものも必須にしたいときに便利
// -? は ? を削除している
type Profile2 = {
  name: string;
  age?: number;
};

type RequiredType = Required<Profile2>;
// １行で以下のように変更できる
// type RequiredType = {
//   name: string;
//   age: number;
// }
