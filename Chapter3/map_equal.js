var m = new Map();
m.set('1', 'hoge');
console.log(m.get(1)); // キーは === 演算子で比較される
console.log(m.get('1'));
