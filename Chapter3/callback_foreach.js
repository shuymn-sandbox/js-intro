// forEachメソッド : 配列内の要素を，指定した関数で順に処理するためのメソッド
var data = [2, 3, 4, 5];

// 配列の要素を順番に取り出して，ユーザ定義関数callbackに渡す
// 第一引数value : 要素の値
// 第二引数index : インデックス番号
// 第三引数array : 元の配列
data.forEach(function(value, index, array) {
  console.log(value * value); // 引数valueを自乗した結果を表示
});
