
let fullName = "HiKann";
const birthYear = 2004;
let isStudent = true;

//Tính tuổi hiện tại
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
// In ra thông tin
console.log(`
Full Name: ${fullName}, 
Birth Year: ${birthYear}, 
Age: ${age}, 
Is Student: ${isStudent}
`);