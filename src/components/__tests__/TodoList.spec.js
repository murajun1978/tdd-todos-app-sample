import React from 'react'
import { shallow, mount } from 'enzyme'
import TodoList from '../TodoList'

describe('TodoList', () => {
  const todos = [
    {
      id: 1,
      title: 'todo1'
    },
    {
      id: 2,
      title: 'todo2'
    }
  ]

  const actions = {
    fetchTodos: jest.fn()
  }

  const wrapper = mount(<TodoList todos={todos} actions={actions} />)

  it("has a `ul.todo-list`", () => {
    expect(wrapper.find('.todo-list')).toHaveLength(1)
  })

  it("has two todos", () => {
    const expectedText = wrapper.find('li').map(node => {
      return node.text()
    })

    expect(['todo1', 'todo2']).toEqual(expectedText)
  })

  it('should call once fetchTodos', () => {
    expect(actions.fetchTodos.mock.calls).toHaveLength(1)
  })
})
