// mapメソッド : 配列を指定された関数で加工できる
// array.map(callback [,that])
// array : 配列オブジェクト
// callback : 個々の要素を加工するための関数
// 関数callbackの中でthisが示すオブジェクト
var data = [2, 3, 4, 5];
// mapメソッドは，戻り値として加工した結果を返す必要がある
// callbackからの戻り値をまとめて，新しい配列を作成している
var result = data.map(function(value, index, array) {
  return value * value;
});

console.log(result);
