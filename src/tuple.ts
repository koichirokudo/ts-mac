export {};
// タプル型 明確に配列の要素がわかっている型のこと
// union type は制約が弱い
// 制約を強くしたいときに、 tupleを使用する
// 0 は数値のみ、 1は文字のみなど
let profile: [string, number] = ['kudo', 26];
// profile = [26, 'kudo']; // is not assignable