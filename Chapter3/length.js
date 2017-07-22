// lengthプロパティでは，マルチバイト文字も1文字としてカウントしてくれる
// しかし，サロゲートペア文字は例外
var msg = '𠮟る';
console.log(msg.length); // 3

var len = msg.length;
var num = msg.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length - 1; // サロゲートペアの文字数を求める
console.log(msg.length - num);
