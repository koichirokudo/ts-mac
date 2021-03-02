export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};
// pick
// name と weight を持った型を作れる
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type TestPick = MyPick<DetailedProfile, 'name' | 'weight'>;

type Test = keyof DetailedProfile;

// omit
// 指定した型を除外する
type SmallProfile = Omit<DetailedProfile, 'height'>;

type MyOmit = Pick<DetailedProfile, 'name' | 'weight'>;
type MySmallProfile = MyOmit;
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
