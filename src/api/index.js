/*
api.fetchTodos()
  .then(res => console.log('success'))
  .catch(err => console.log('failure'))
*/

import client from './client'

export const fetchTodos = () => {
  return client.get('/todos')
          .then(res => res.data)
}
