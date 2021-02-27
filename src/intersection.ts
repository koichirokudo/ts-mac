export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  // throwingSpeed: 154, // エラーになる
  battingAverage: 0.367,
};

// こんなのは使わなくてよい
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// intersection 型を交差して既存の型を組み合わせて使うことができる
// これで Otani Shouhei が作れる
type TwoWayPlayer = Pitcher1 & Batter1;

// intersection
const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
