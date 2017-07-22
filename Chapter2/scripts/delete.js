// delete演算子 オブジェクトのプロパティや配列の要素を削除
var ary = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(delete ary[0]); // true
console.log(ary);
// 配列要素を削除しても，インデックス番号は変わらない

var obj = {x:1, y:2};
console.log(delete obj.x); // true
console.log(obj.x); // undefined

var obj2 = {x:obj, y:2};
console.log(delete obj2.x); // true
console.log(obj); // y:2
// プロパティを削除しても，プロパティが削除されるだけで，参照先のオブジェクトは削除されない

var data1 = 1;
console.log(delete data1); // false
console.log(data1); // 1
// 明示的に宣言された変数は削除できない

data2 = 10;
console.log(delete data2); // true
console.log(data2); // エラー
