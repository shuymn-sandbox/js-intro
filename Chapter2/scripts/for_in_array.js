// 構文上使えるが，本来は配列で for in 文は使わない
// for in 命令では処理の順序が保証されない
// 仮変数にはインデックス番号が格納されるのではないから誤解を招きやすい ... など
var data = [ 'apple', 'orange', 'banana' ];
for (var key in data) {
  console.log(data[key]);
}
