export {};

// null を持たせたときには型推論では any になるので
// : null とする
let absence: null = null; 

// absence = 'hello'; // Type '"hello"' is not assignable to type 'null'.ts(2322)

// undefined を持たせたには型推論では any になる
// : undefined
let data: undefined = undefined;
// data = 1223; // Type '1223' is not assignable to type 'undefined'.ts(2322)
