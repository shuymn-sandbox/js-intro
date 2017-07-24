// Queue は 先入れ先出し(First In First Out) と呼ばれるデータ構造．待ち行列とも言う
var data = [];

data.push(1);
data.push(2);
data.push(3);

console.log(data.shift()); // 先頭要素を取り出して削除
console.log(data.shift());
console.log(data.shift());
