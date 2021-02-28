export {};
// optional な引数の表現(あってもなくてもよい引数)
// optional の引数は末尾に ? を追加する
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  pritable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (pritable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86, true);

// bmi(身長, 体重, console.logで出力するかどうか)
// bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86);
