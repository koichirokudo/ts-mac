export {};

// A function whose declared type is neither 'void' nor 'any' must return a value.ts(2355)
// void でも any でもない場合は、明示的に return undefined を書くが不要な場合もあるから
// : void か : any にする必要がある 
function returnNothing(): void {
  console.log("I don't return anything");

}
console.log(returnNothing());