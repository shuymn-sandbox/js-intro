// 数学に関わる演算機能をまとめたのがMathオブジェクト
console.log(Math.abs(-100)); // 絶対値
console.log(Math.clz32(1)); // 32ビットバイナリにおいて前にある0ビットの個数
console.log(Math.min(20, 40, 60)); // 最小値
console.log(Math.max(20, 40, 60)); // 最大値
console.log(Math.pow(5, 3)); // 5 の 3 乗
console.log(Math.random()); // 0-1未満の乱数
console.log(Math.sign(-100)); // 指定した値が正の数の場合は1，負の数の場合は-1，0の場合は0

console.log(Math.ceil(1234.56)); // 指定した数以上の最小の整数 小数点以下の切り上げ
console.log(Math.ceil(-1234.56));

console.log(Math.floor(1234.56)); // 指定した数以下の最大の整数 小数点以下の切り捨て
console.log(Math.floor(-1234.56));

console.log(Math.round(1234.56)); // 四捨五入
console.log(Math.round(-1234.56));

console.log(Math.trunc(1234.56)); // 小数部分を単純に切り捨て(整数部分を取得)
console.log(Math.trunc(-1234.56));

console.log(Math.sqrt(81)); // 平方根
console.log(Math.cbrt(81)); // 立方根
console.log(Math.hypot(3, 4)); // 引数の二乗和の平方根

console.log(Math.cos(1));
console.log(Math.sin(1));
console.log(Math.tan(1));

console.log(Math.atan2(1, 3)); // 2変数のアークタンジェント
console.log(Math.log(10));
console.log(Math.exp(3)); // 指数関数(eの累乗)
console.log(Math.expm1(1)); // e^(num) - 1
