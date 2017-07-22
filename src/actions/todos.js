import * as api from '../api'

export const fetchTodosSuccess = (todos) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos
  }
}

/*
function fetchTodos() {
  return (dispatch, getState) => {
    return api.fetchTodos()
            .then(res => dispatch(fetchTodosSuccess(res)))
  };
}
*/

export const fetchTodos = () => (dispatch, getState) => {
  return api.fetchTodos()
          .then(res => dispatch(fetchTodosSuccess(res)))
}
