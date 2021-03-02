export {};

type Profile = {
  name: string;
  age: number;
  from: string;
};

const me: Profile = {
  name: 'Kudo',
  age: 26,
  from: 'Japan',
};

me.age++;

console.log(me);

// すべてのプロパティに readonly がつく
// 追加したものにも readonly がつく
type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'test',
  age: 40,
  from: 'US',
};

// friend.age++;
// friend.from = 'UK';
// 自作もできるよねー
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
