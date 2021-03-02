export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Distributive Conditional Types のルールが適用される
// extends は型の互換性があるかを確認している
type NonFunctionType = Exclude<SomeTypes, string | number>;
// type Exclude =
// | (string extends string | number | ? never : string) → true で never
// | (string extends string | number | ? never : number) → true で never
// | (string extends string | number | ? never : DebugType) →　false で DebugType
// となるので、Exclude = DebugType となる
