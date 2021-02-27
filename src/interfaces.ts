export {};

// aliaes
type ObjectType = {
  name: string;
  age: number;
};

// interface の先頭は大文字で = は不要
interface ObjectInterface {
  name: string;
  age: number;
}

// interface でもオブジェクトに型の名前をつけることができる
let object: ObjectInterface = {
  name: 'kudo',
  age: 26,
};
