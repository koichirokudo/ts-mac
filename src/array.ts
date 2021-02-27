export {};
// 推奨
let numbers: number[] = [1, 2, 3];

// 非推奨 Arrayはinterface で <> はジェネリクスを使用している
let numbers2: Array<number> = [1, 2, 3];
let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

// string
let strings: string[] = ['TypsScript', 'JavaScript', 'CoffeeScript'];

let array2d: number[][] = [
  [50, 100],
  [100, 300]
];

let array2d2: string[][] = [
  ['j', 'a'],
  ['p', 'n']
];

// 複数の型 共用型 union types
let arry: (string | number | boolean)[] = [1, false, 'Japan'];

