
const ages = [32, 33, 16, 40];

const ages2 = ages.map((item, index) => {
    return item * 2;
}) 

const agesGreaterThan30 = ages.filter((item) => {
    return item > 30;
})

console.log("Original ages:", ages); // Mảng gốc vẫn không thay đổi
console.log("Modified ages:", ages2); // Mảng mới chứa các giá trị đã được nhân đôi
console.log("Ages greater than 30:", agesGreaterThan30);