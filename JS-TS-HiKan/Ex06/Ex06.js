
// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log("Original array:", names);

const others = ["HiKan", 25, [1, 2, 3]] // lưu truu nhiều kiểu dữ liệu khác nhau trong một mảng

console.log("Other array:", others);

console.log("First name:", names[0]); // Truy cập phần tử đầu tiên của mảng
console.log("Last name:", names[names.length - 1]); // Truy cập phần tử cuối cùng của mảng

// CHinh sửa phần tử trong mảng
names[3] = "Alicia";
console.log("Modified array:", names);

console.log("Third name:", names[2]);   

for (let i = 0; i < names.length; i++){
    console.log(`Name at index ${i}:`, names[i]);
}

// for-each
names.forEach(function(value, index){
    console.log("Value = ", value, "index = ", index);
})

// for-each arrow function

names.forEach((value, index) => {
    console.log("Value = ", value, "index = ", index);
})