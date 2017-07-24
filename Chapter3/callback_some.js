// someメソッド : 指定された関数で個々の要素を判定し，1つでも条件に合致する要素があればtrueを返す
// array.some(callback [,that])
var data = [4, 9, 16, 25];
var result = data.some(function(value, index, array) {
  return value % 3 === 0;
});

if (result) {
  console.log('3の倍数が見つかりました．');
} else {
  console.log('3の倍数は見つかりませんでした．');
}

console.log('---');

// 似たようなメソッドに，everyメソッドがある．
// すべて条件に合致すればtrueを返す

var result = data.every(function(value) {
  return value % 3 === 0;
});

if (result) {
  console.log('全部3の倍数がでした．');
} else {
  console.log('少なくとも1つ3の倍数でありませんでした．');
}
