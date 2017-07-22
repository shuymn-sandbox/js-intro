// 基本データ型でもnew演算子を使って明示的にオブジェクトを生成することはできる
var str = new String('こんにちは');
// このような書き方は冗長だし，有害であるパターンもある↓
var flag = new Boolean(false);
if (flag) {
  console.log('flagはtrueです．');  // jsはnull以外のオブジェクトをtrueとみなす
}
