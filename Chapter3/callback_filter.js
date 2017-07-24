// filterメソッド : 指定された関数で個々の要素を判定し，条件に合致した要素だけを取り出す
var data = [4, 9, 16, 25];
var result = data.filter(function(value, index, array) {
  return value % 2 === 1;
});

console.log(result); // 2で割った余りが1(奇数)である要素だけが取り出される
