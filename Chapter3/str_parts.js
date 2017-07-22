var str1 = 'にわにはにわにわとりがいる';
var str2 = 'Wingsプロジェクト';

console.log(str2.charAt(4)); // 4+1=5文字目を抽出
console.log(str2.slice(5, 8)); // 6-8文字目を抽出
console.log(str2.substring(5, 8)); // 同上
console.log(str2.substr(5, 3)); // 6文字目から3文字抽出
console.log(str2.split('s')); // sより前とsより後で文字列を分割
console.log(str1.split('わ', 3)); // わ で 3つに分割
