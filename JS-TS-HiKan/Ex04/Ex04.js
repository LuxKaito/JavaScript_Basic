

// if else 
let age = 20;
if (age >= 18) {
    console.log("Bạn đủ tuổi để lái xe.");
} else {
    console.log("Bạn chưa đủ tuổi để lái xe.");
}

// score 
let score = 8.5;
if (score >= 9) {
    console.log("Xếp loại Giỏi");
} else if (score >= 8) {
    console.log("Xếp loại Khá");
} else if (score >= 7) {
    console.log("Xếp loại Trung bình");
} else {
    console.log("Xếp loại Yếu");
}

// switch case
let day = 3;
switch (day) {
    case 1: 
        console.log("Thứ Hai");
        break;
    case 2:
        console.log("Thứ Ba");
        break;
    case 3:
        console.log("Thứ Tư");
        break;
    case 4:
        console.log("Thứ Năm");
        break;
    case 5:
        console.log("Thứ Sáu");
        break;
    case 6:
        console.log("Thứ Bảy");
        break;  
    case 7:
        console.log("Chủ Nhật");
        break;
    default:
        console.log("Ngày không hợp lệ");
}

// Vòng lặp for
for(let i = 0; i <= 5; i++){
    console.log("Số: " + i);
}

// Vòng lặp while   
while(age < 25){
    console.log("Tuổi hiện tại: " + age);
    age++;
}

// Vòng lặp do while
let score1 = 10;
do {
    console.log("Điểm số: " + score1);
    score1--;
} while(score1 > 50); // vẫn chạy ít nhất một lần dù điều kiện sai
