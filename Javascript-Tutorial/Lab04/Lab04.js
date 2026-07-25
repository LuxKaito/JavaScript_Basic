/*
Yêu cầu: Tạo form đăng nhập đơn giản
Tạo một form html gồm:
- Input nhập username
- Input nhập password
- Button "Đăng nhập"
Khi người dùng nhấn nút “Đăng nhập”:
- Lấy giá trị từ hai ô nhập liệu
- So sánh với username/password đã định nghĩa sẵn trong JavaScript (hardcode)
username: khang@gmail.com
password: 123456

Nếu đúng:
- Hiện thông báo "Đăng nhập thành công!" bằng alert()
- Redirect tới trang html (success.html)
Nếu sai:
- Hiện alert("Tài khoản hoặc mật khẩu sai")
- Đổi màu viền ô input thành đỏ (dùng .style.borderColor)
*/
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    
   if (username === "khang@gmail.com" && password === "123456" ){
        alert("Đăng nhập thành công!");
        window.location.href = "success.html";
   }else{
        alert("Tài khoản hoặc mật khẩu sai");
        usernameInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
   }
});
