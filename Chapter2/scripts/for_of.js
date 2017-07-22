// 列挙可能なオブジェクトのためのfor文 ES2015
var data = [ 'apple', 'orange', 'banana' ];
Array.prototype.hoge = function() {}
for (var value of data) {
  console.log(value);
}
