export {};

type Profile = {
  name: string;
  age: number;
};
// Partial
type PartialProfile = Partial<Profile>;

// 「in」「key of」
// keyof T というオブジェクト型の全てのプロパティを文字列リテラル型の合併型で引っ張ってこれる
// name | age の プロパティが作れる
// PropertyTypes に Profile のプロパティを文字列リテラル型のunion型で取得できる
// type PropertyTypes = "name" | "age"
type PropertyTypes = keyof Profile;

// in で一個ずつ文字列リテラル型を P に入れる
// ある時は、P は "name" ある時は P は "age" となる
// T[P] は Profile["name"] ので結果として string が得られる
// Profile["age"] なので number が得られる
type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
