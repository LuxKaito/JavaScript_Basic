/*
Bài Tập Lab 02
Yêu cầu:
1.Tạo hàm tinhTrungBinh(toan, van, anh)
- Hàm nhận vào 3 điểm số (sử dụng tham số).
- Trả về điểm trung bình (sử dụng return).

2.Tạo hàm xepLoai(diemTB)
Dựa vào điểm trung bình, xếp loại học sinh:
Từ 9 → "Xuất sắc"
Từ 8 và nhỏ hơn 9 → "Giỏi"
Từ 6.5 và nhỏ hơn 8→ "Khá"
Còn lại → "Trung bình"
Dùng if / else if / else để thực hiện

Output:
Cho trước 3 biến:
const diemToan = 9;
const diemVan = 8;
const diemAnh = 7;

Gọi các hàm trên để tính điểm trung bình và in ra kết quả sau:
Điểm trung bình: 8.0
Xếp loại: Giỏi
*/

// funtion arrow
const tinhTrunhBinh = (toan, van, anh) => {
    return (toan + van + anh) / 3;
}

const xepLoai = (diemTB) => {
    if(diemTB >= 9){
        return "Xuất sắc";
    }
    else if(diemTB >= 8 && diemTB < 9){
        return "Giỏi";
    }
    else if(diemTB >= 6.5 && diemTB < 8){
        return "Khá";
    }
    else{
        return "Trung bình";
    }
}

// function tinhTrunhBinh(toan, van, anh){
//     return (toan + van + anh) / 3;
// }

// function xepLoai(diemTB){
//     if(diemTB >= 9){
//         return "Xuất sắc";
//     }
//     else if(diemTB >= 8 && diemTB < 9){
//         return "Giỏi";
//     }
//     else if(diemTB >= 6.5 && diemTB < 8){
//         return "Khá";
//     }
//     else{
//         return "Trung bình";
//     }
// }

const toan = 9;
const van = 8;    
const anh = 7;

console.log("Điểm trung bình là: " + tinhTrunhBinh(toan, van, anh));
console.log("Xếp loại: " + xepLoai(tinhTrunhBinh(toan, van, anh))); 
