import '../styles/Todo.css'

// eslint-disable-next-line react/prop-types
function TodoComponent({text, onComplete}) {
    return (
        <div className="oneTodo">
            <div className="spanTodo">
                <h4 id="text_todo_left">{text}</h4> {/* props로 받은 text */}
                <button id="todo_complete" onClick={onComplete}>완료</button>
            </div>
            <hr className="hr_middle"/>
        </div>
    )
}

export default TodoComponent