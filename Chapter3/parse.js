var n = '123xxx';
console.log(Number(n)); // Number関数は文字列混在の数値を解析できない
console.log(Number.parseFloat(n)); // 先頭からの連続した数値を取り出してくれるだけ xxx123は無理
console.log(Number.parseInt(n)); // 同上
console.log('---');

var d = new Date(); // Dateオブジェクト
console.log(Number(d)); // Dateオブジェクトを経過ミリ秒に変換した値 を 数値として返すことができる
console.log(Number.parseFloat(d)); // できない
console.log(Number.parseInt(d)); // できない
console.log('---');

var h = '0x10'; // 0x10 は16進数の整数リテラル
console.log(Number(h)); // 16進数とみなしてくれる
console.log(Number.parseFloat(h)); // 数値・文字列混在の文字列としてみなされる
console.log(Number.parseInt(h)); // 16進数とみなしてくれる
console.log('---');

var b = '0b11'; // ES2015で追加された2進数の整数リテラル
console.log(Number(b)); // 認識可能
console.log(Number.parseFloat(b)); // できない
console.log(Number.parseInt(b)); // できない
console.log('---');

var e = '1.01e+2' // 浮動小数点の指数表現
console.log(Number(e)); // 認識可能
console.log(Number.parseFloat(e)); // 認識可能
console.log(Number.parseInt(e)); // e+2を除外し，小数点以下を捨てたものが得られる
