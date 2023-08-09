// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, onDelete} = props
  const {title, id} = todoList

  const deleteTodo = () => {
    console.log('Hi')
    onDelete(id)
  }
  return (
    <li className="todo-item-list-container">
      <p>{title}</p>
      <button type="button" className="delete-btn-style" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
