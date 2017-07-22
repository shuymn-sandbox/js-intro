// 引数start > end であるとき，substringメソッドは，startとendの関係を入れ替えて，end + 1 から start文字目を抽出する
// sliceメソッドはそういう挙動はせず．空文字列を返す
var str = 'WINGSプロジェクト';
console.log(str.substring(8, 5)); // 6-8文字目を抽出
console.log(str.slice(8, 5)); // 空

// startやendに負の数を指定子た場合，substringメソッドは無条件に0とみなすが，sliceメソッドは 文字列末尾からの文字数 とみなす
console.log(str.substring(5, -2)); // 1-5文字目を抽出
console.log(str.slice(5, -2)); // 6-9文字目を抽出
