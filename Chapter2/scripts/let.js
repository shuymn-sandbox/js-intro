// ES2015から追加されたlet命令
// 変数の重複は許可しない
// ブロックスコープを認識する

// 基本的な宣言
let msg;
// 複数の変数を宣言
let x, y;
// 初期値を与える
// let msg = 'Hello, world!'; これはむり
let greeting = 'Hello, world!';

msg = 'foo';
x = 10;
y = 20;

console.log(greeting);
console.log(msg);
console.log(x + y);
