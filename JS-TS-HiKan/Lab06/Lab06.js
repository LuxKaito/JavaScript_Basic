

const saveBtn = document.getElementById("btnSave");
const inputTodo = document.getElementById("name");

// saveBtn.addEventListener("click", () => {
//     alert("Click me");
// })

function getRandomId(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if(saveBtn){
saveBtn.addEventListener("click", () => {
    const myTodo = {
        id: getRandomId(1, 100000000000),
        name: inputTodo.value
    }
    const currentTodoStr = localStorage.getItem("myTodo");
    // Đã tồn tại todo trước đó
    if(currentTodoStr){
        //convert string to object
        const currentTodo = JSON.parse(currentTodoStr);
        
        // push thêm todo
        currentTodo.push(myTodo);
        localStorage.setItem("myTodo", JSON.stringify(currentTodo));
    }else{
        localStorage.setItem("myTodo", JSON.stringify([myTodo]));
    }

    //success
    window.location.href = "Lab06.html";
})
}


