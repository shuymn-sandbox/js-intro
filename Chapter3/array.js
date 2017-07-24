var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh', 'Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];

try {

  with(console) {
    log(ary1.length); // 配列のサイズ(要素数)
    log(ary1.toString()); // 各要素をカンマ区切りの文字列にする
    log(ary1.indexOf('Sato')); // 指定した要素にが～値した 最初 の要素のキーを取得
    log(ary1.lastIndexOf('Sato')); // 指定した要素に合致した 最後 の要素のキーを取得

    log(ary1.concat(ary2)); // 指定した配列を現在の配列に連結

    log(ary1.join('/')); // 配列内の要素を指定した区切り文字 / で連結

    log(ary1.slice(1)); // 指定した数+1番目の要素から最後の要素までを抜き出す
    log(ary1.slice(1, 2)); // 2つ目の引数でどこまで抜き出すかの指定も可能

    log(Array.isArray(ary1)); // 指定したオブジェクトが配列かどうか判定
    log(Array.of(20,40,60));
  }

  console.log('---');

  with(console) {
    log(ary1); // 置き換え前の配列

    // splice(s, c[, r [,...]]) s+1 から s+c番目の要素を r で置き換える
    log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi')); // 置き換え対象の要素が取得される
    log(ary1); // 置き換え後の配列

    // copyWithin(t, s[, e]) s+1からe番目の要素をt+1番目からの位置にコピー
    log(ary1.copyWithin(1, 3, 5)); // 4-5番目の要素を2-3番目の位置にコピー
    log(ary1);

    log(ary1.pop()); // 配列末尾の要素を取得し，削除する
    log(ary1);

    log(ary1.push('Kondo')); // 配列の末尾に要素を追加
    log(ary1);

    log(ary1.shift()); // 配列先頭の要素を取得して削除
    log(ary1);

    // unshift(d1 [,d2..]) 配列先頭に指定した要素を追加
    log(ary1.unshift('Ozawa', 'Kuge')); // 追加後の要素数を返す
    log(ary1);

    log(ary1.reverse()); // 逆順に並び替える
    log(ary1);

    log(ary1.sort()); // 昇順に並び替え
    log(ary1);
  }

  console.log('---');

  with(console) { 
    log(ary2); // 置き換え前の配列

    // fill(v [,s [,e]]) 配列内のs+1 から e までの要素をv で置き換え
    log(ary2.fill('Suzuki', 1, 3));
    log(ary2); // 置き換え後の配列
  }

} catch(e) {
  console.log(e.message);
}
