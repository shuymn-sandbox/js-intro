// JSで安全に演算できる範囲の整数の上限・下限を表す．それを超えた演算は結果が保証されない
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2); // 不正な値
