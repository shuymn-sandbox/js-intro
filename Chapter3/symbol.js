// シンボルを作成する Symbolオブジェクト(ES2015)
let sym1 = Symbol('sym'); // シンボルを作成
let sym2 = Symbol('sym'); // new演算子はつけない

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2); // 別々に作成されたシンボルは別物とみなされる

// 文字列や数値への暗黙的な型変換はできない
try { console.log(sym1 + ''); } catch(e) { console.log(e.message); }
try { console.log(sym1 - 0); } catch(e) { console.log(e.message); }

// boolean型への変換は可能
console.log(typeof !!sym1);
