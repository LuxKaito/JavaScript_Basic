
const scores = [10, 8 , 7, 9, 6];

// Read data
// scores.forEach((element, index) => {
//     console.log("index = ", index, "value = ", element);
// })

//modify data
const modifiedScores = scores.map((value, index) => {
    // console.log("Mapped value = ", value, "index = ", index);
    return value * 2; // trả về giá trị mới sau khi biến đổi
})

console.log("Original scores:", scores); // Mảng gốc vẫn không thay đổi
console.log("Modified scores:", modifiedScores); // Mảng mới chứa các giá trị đã được nhân đôi

