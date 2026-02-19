console.log("Hello World! Welcome to JavaScript.");

// Khai báo biến và gán giá trị
var name = "HiKan";
console.log(name);

// Sử dụng cosnst để khai báo hằng số
const age = 25;
"age = 30; // Lỗi: Không thể gán lại giá trị cho hằng số"
console.log(age);

// Phân biệt giữa var (cũ lỗi thời) và let
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10 - var có phạm vi toàn cục
// console.log(y); // Lỗi: y không được khai báo trong phạm vi hiện tại