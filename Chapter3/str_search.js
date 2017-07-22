var str = 'にわにはにわにわとりがいる';

console.log(str.indexOf('にわ')); // 先頭から検索
console.log(str.lastIndexOf('にわ')); // 末尾から検索
console.log(str.indexOf('にわ', 3)); // 4(3+1)文字目から右方向検索
console.log(str.lastIndexOf('わ', 5)); // 6文字目から左方向検索
console.log(str.indexOf('ガーデン')); // 不一致
console.log(str.startsWith('にわ')); // 指定された文字列で始まるならtrue
console.log(str.endsWith('にわ')); // 指定された文字列で終わるならtrue
console.log(str.includes('にわ')); // 指定された文字列を含むならtrue
