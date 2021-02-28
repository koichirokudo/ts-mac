export {};

// 抽象メソッドは必ずオーバーライドしないといけない
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}
// 実装もれがあると error が出力されるため便利
class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
