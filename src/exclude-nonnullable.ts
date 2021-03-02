export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
// Exclude
// 指定した union 型を除外できる
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// 別の方法 function だけ除外できる
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract
// 指定した union 型を抽出できる
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// 別の方法 function だけ抽出できる
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// nonnullable
// union 型から null や undefined を排除できる
type NullableTypes = string | number | null | undefined;
type nonnullableTypes = NonNullable<NullableTypes>;
