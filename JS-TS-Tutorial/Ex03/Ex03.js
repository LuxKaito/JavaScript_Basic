
// Toán tử số h
const a = 5;
const b = 10;
const c = 15;

console.log(a + b); // 15

const d = a + b + c;
console.log(d); // 30

const e = c % b;
console.log(e); // 5

let k = 10;
const h = ++k; // ++ tăng ngay lập tức
// const l = k++; // h = k rồi mới tăng k
console.log(h); 
console.log(k);
// console.log(l);
// console.log(k);

// Toán tử so sánh
const x = 5;
const y = '5';
console.log(x == y); // true, so sánh giá trị
console.log(x === y); // false, so sánh cả giá trị và kiểu dữ liệu
console.log(x != y); // false, so sánh giá trị
console.log(x !== y); // true, so sánh cả giá trị và kiểu dữ liệu

// Toán tử logic
const isTrue = true;
const isFalse = false;
console.log(isTrue && isFalse); // false, toán tử AND
console.log(isTrue || isFalse); // true, toán tử OR
console.log(!isTrue); // false, toán tử NOT