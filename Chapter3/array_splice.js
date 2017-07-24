// array.splice(index, many [,elem1 [,elem2,...]])
// array: 配列オブジェクト
// index: 要素の抽出開始位置
// many : 取り出す要素数
// elem : 削除箇所に入る要素
var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];

console.log(data.splice(3, 2, 'Yamada', 'Suzuki')); // 3番目から2要素をYamada と Suzukiに変える
console.log(data);

console.log('-----');

console.log(data.splice(3, 2)); // 挿入する要素を指定しない場合，削除される
console.log(data);

console.log('-----');

console.log(data.splice(1, 0, 'Tanaka')); // 置き換える要素数をゼロにした場合，indexで指定された位置に要素を挿入する
console.log(data);
