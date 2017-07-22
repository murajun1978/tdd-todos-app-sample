import React, { Component } from 'react'

class TodoList extends Component {
  componentDidMount() {
    this.props.actions.fetchTodos()
  }

  render() {
    const { todos } = this.props

    return (
      <ul className="todo-list">
        { todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
      </ul>
    )
  }
}

export default TodoList
