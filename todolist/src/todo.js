const todoInput = document.getElementById('todoInput');

todoInput.addEventListener("keypress",function(event){
    if(event.key === "Enter") {
        addTodo();
        todoInput.value="";
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();

    if(todoText==="") {
        alert('할 일을 입력하세요');
        return;
    }
    
    const todoList = document.querySelector(".todo-list table");
    const $tr = document.createElement('tr');
    $tr.innerHTML = `<td id="todo-item">${todoText}</td><td id="btn"><button onclick="completeTodo(this)">완료</td>`;
    todoList.appendChild($tr);
}

function completeTodo(element) {
    const doneList = document.querySelector(".done-list table");
    
    const $tr = document.createElement('tr');
    const todoText = element.parentElement.previousElementSibling.textContent;
    $tr.innerHTML = `<td id="done-item">${todoText}</td><td id="btn"><button onclick="deleteTodo(this)">삭제</button></td>`;
    doneList.appendChild($tr);

    element.parentElement.parentElement.remove();
}

function deleteTodo(element) {
    element.parentElement.parentElement.remove();
}