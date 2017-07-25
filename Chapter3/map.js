// mapオブジェクトは，キーと値のセット(いわゆる連想配列・ハッシュ)を管理するためのオブジェクト
// ES2015以前では，オブジェクトリテラルで連想配列を管理していたが，専用のオブジェクトが用意された
let m = new Map();
m.set('dog', 'ワンワン'); // キーと値をベアにして要素を追加．重複していたら上書きされる
m.set('cat', 'ニャー');
m.set('mouse', 'チュー');

console.log(m.size); // 要素数
console.log(m.get('dog')); // 指定したキーの要素を取得
console.log(m.has('cat')); // 指定したキーの要素があるか判定

console.log('---');

// キーを順番に取得
for (let key of m.keys()) { // map.keys() すべてのキーを取得
  console.log(key);
}

console.log('---');

// 値を順に取得
for (let value of m.values()) { // map.values() すべての値を取得
  console.log(value);
}

console.log('---');

// キー・値を順に取得
for (let [key, value] of m) {
  console.log(key + ':' + value);
}

console.log('---');

console.log(m.size); // もとの要素数
m.delete('dog'); // キー dog を削除
console.log(m.size); // 削除後の要素数

m.clear(); // すべてのキー・値を破棄
console.log(m.size);

// オブジェクトリテラルとの違い
// 1. 任意の型でキーを設定できる
// オブジェクトリテラルはプロパティ名をキーの代わりにしていたので，文字列型しか使えなかったが，Mapオブジェクトでは任意の型をキーにできる
// 2. Mapのサイズを取得できる．オブジェクトリテラルにはない機能
// 3. クリーンなMapを作成できる
