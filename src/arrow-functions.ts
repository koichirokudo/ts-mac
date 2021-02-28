export {};

// アロー関数を使った際にも型推論がでてくるのでこれを適用できる
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height); // return １行で返却する場合、{} と return は不要

console.log(bmi(1.78, 86));
