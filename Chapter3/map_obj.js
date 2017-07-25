var m1 = new Map();
m1.set({}, 'hoge'); // オブジェクトをキーにする
// オブジェクトは参照型であるから，見た目が同じでも，異なる場所で生成されたオブジェクトは異なるものとして扱われる
console.log(m1.get({})); // undefined

// 正しくキー{}を認識させたい場合はこうする
var key = {};
var m2 = new Map();
m2.set(key, 'hoge');
console.log(m2.get(key));
