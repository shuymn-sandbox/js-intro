// オブジェクトリテラル
// オブジェクトとは，名前をキーにアクセスできる配列．ハッシュ，連想配列とも言う
// オブジェクト内の個々のデータは プロパティ と呼ばれる
// プロパティには，文字列や数値などの情報だけでなく，関数も入れることができる
// 関数が格納されたプロパティ : メソッド

var obj = {x:1, y:2, z:3}; // キー名:値, キー名:値 ...
console.log(obj.x); // オブジェクト名.プロパティ名 : ドット演算子
console.log(obj['x']); // オブジェクト名['プロパティ名'] : ブラケット構文
