// soortメソッドに引数として関数を与えると，独自のルールでソートできる
var ary = [5, 25, 10];
console.log(ary.sort()); // デフォルトの挙動(文字列としてソート)
// 引数は2つ，第一引数が第二引数より小さいときは負の数，大きい場合は正の数を返す(数値としてソート)
console.log(ary.sort(function(x, y) {
  return x - y;
}));
