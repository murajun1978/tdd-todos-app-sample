import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TodoList from '../../components/TodoList'
import * as actions from '../../actions/todos'

class App extends Component {
  render() {
    const { todos, actions } = this.props

    return (
      <TodoList todos={todos} actions={actions} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
