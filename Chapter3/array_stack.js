// stackは 後入れ先出し(Last In First Out) と 先入れ後出し(First In Last Out)の二種類ある
var data = [];

data.push(1); // 配列の末尾にカッコ内の値や文字列を追加
data.push(2); // 
data.push(3);

console.log(data.pop()); // 末尾要素を取り出して削除
console.log(data.pop());
console.log(data.pop());
