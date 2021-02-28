export {};

class Mahotsukai {}
class Souryto {}
// typescriptは単一継承のみ
// 複数の interface を継承することは許可されている
// interface はすべての抽象メソッドのようなクラスのようなもの
// 複数の interface からひとつのクラスが作成できる
// interface は多重継承ができる
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

// Kenja と Senshi の2つの interface を実装しているクラス
// 以下は、Jiro クラスに interface メソッドの実装がないよというエラー
// Class 'Jiro' incorrectly implements interface 'Kenja'.
// Property 'ionazun' is missing in type 'Jiro' but required in type 'Kenja'.ts(2420)
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
