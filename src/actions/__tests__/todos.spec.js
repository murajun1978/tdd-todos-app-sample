import MockAdapter from 'axios-mock-adapter'
import * as api from '../../api'
import client from '../../api/client'
import * as actions from '../todos'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('todos action', () => {
  const mockStore = configureStore([thunk])
  const mock = new MockAdapter(client)
  const todos = [
    {
      id: 1,
      title: 'todo1'
    },
  ]

  describe('action creator', () => {
    it('create FETCH_TODOS_SUCCESS', () => {
      expect(actions.fetchTodosSuccess(todos)).toEqual({
        type: 'FETCH_TODOS_SUCCESS',
        todos
      })
    })
  })

  describe('fetchTodos', () => {
    it('returns action', () => {
      mock.onGet('/todos')
        .reply(200, todos)

      const store = mockStore({ todos: [] })

      return store.dispatch(actions.fetchTodos()).then(() => {
        expect(store.getActions()).toEqual([
          { type: 'FETCH_TODOS_SUCCESS', todos }
        ])
      })
    })
  })
})
