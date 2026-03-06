

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

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("myTodo");
    if(todoListStr){
        const todoList = JSON.parse(todoListStr);

    const tbody = document.querySelector('#todoList tbody');
    
    if (todoList && todoList.length){
        todoList.forEach((todo, index) => {
            tbody.innerHTML += `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.name}</td>
                    <td>
                    <button 
                    data-id="${todo.id}" 
                    class="btn-delete">Delete</button>
                    </td>
                </tr>
            `;
        });
    }
}
}

generateTodoTable();

const deleteBtns = document.querySelectorAll(".btn-delete");

if(deleteBtns){
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const todoId = btn.getAttribute("data-id");
            deleteTodo(todoId);
        });
    });
}

const deleteTodo = (id) => {
    const todoListStr = localStorage.getItem("myTodo");
    if(todoListStr){
        const todoList = JSON.parse(todoListStr);
        const newTodoList = todoList.filter((todo, index) => todo.id + "" !== id);
        localStorage.setItem("myTodo", JSON.stringify(newTodoList));
        window.location.reload();
    }
}

