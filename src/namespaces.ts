export {};

namespace Japanese {
  // folder
  export namespace Tokyo {
    // folder
    export class Person {
      // file
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      // file
      constructor(public name: string) {}
    }
  }
  // folder
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('kudo');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('test');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
