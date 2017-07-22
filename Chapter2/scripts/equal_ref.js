// == 等価演算子
// 基本型の場合
console.log(1 == true); // -> true

// 参照型の場合
var data1 = ['JavaScript', 'Ajax', 'ASP.NET'];
var data2 = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data1 == data2); // -> false 見かけ上は同じ配列でも，参照しているアドレスは異なる
