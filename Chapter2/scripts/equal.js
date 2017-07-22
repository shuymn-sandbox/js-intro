// 基本型
var x = 1;
var y = x; // xの値(1)がyにコピーされる(値による代入)
x = 2;
console.log(y);

// 参照型
var data1 = [0,1,2]; // 配列リテラルの宣言
var data2 = data1; //参照による代入
data1[0] = 5;
console.log(data2);
