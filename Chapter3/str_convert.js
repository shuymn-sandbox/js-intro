var str1 = 'Wingsプロジェクト';
var str2 = '𠮟られて';

console.log(str1.charCodeAt(0)); // n+1番目の文字をlatin-1コードに変換
console.log(String.fromCharCode(87, 105, 110, 103)); // latin-1コードを文字に変換
console.log(str2.codePointAt(0)); // n+1番目の文字をUTF-16エンコードされたコードポイント値に変換
console.log(String.fromCodePoint(134047)); // コードポイント値から文字列を生成
