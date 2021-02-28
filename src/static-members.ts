export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Takeru';
  static lastName: string = 'Ishidao';

  static work() {
    // "Hey, guys! Are you interested in TypeScript? Let's dive into TyepScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TyepScript!`;
  }
}

// static メソッドにはこれでアクセスできない
// let me = new Me();
// console.log(me.isProgrammer);

// static はインスタン化不要
console.log(Me.isProgrammer);
console.log(Me.work());
