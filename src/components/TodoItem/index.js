// Write your code here
import {Component} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoList} = props
  const {title} = todoList
  return (
    <li className="todo-item-list-container">
      <p>{title}</p>
      <button type="button" className="delete-btn-style">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
