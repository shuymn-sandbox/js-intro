// NaNは自分自身とも等しくない特別な値であるが，Mapの世界では，例外的にNaN === NaNとなる
var m = new Map();
m.set(NaN, 'hoge');
console.log(m.get(NaN));
