import '../styles/Todo.css'

// eslint-disable-next-line react/prop-types
function CompletedComponent({text, onDelete}) {
    return (
        <>
            <div className="oneTodo">
                <div className="spanTodo">
                    <h4 id="text_todo_rigft">{text}</h4>
                    <button id="todo_delete" onClick={onDelete}>삭제</button>
                </div>
                <hr className="hr_middle"/>
            </div> 
        </>
    )
}

export default CompletedComponent