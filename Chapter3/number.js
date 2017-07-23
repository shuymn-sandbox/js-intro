var num1 = 255;
console.log(num1.toString(16)); // 16進数に変換
console.log(num1.toString(8)); // 8進数に変換

var num2 = 123.45678;
console.log(num2.toExponential(2)); // 指数形式に変換
console.log(num2.toFixed(3)); // 小数点以下3桁になるように四捨五入
console.log(num2.toFixed(7));
console.log(num2.toPrecision(10)); // 整数部を含めた全体桁数を指定
console.log(num2.toPrecision(6));
