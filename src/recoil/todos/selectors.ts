import { selector } from 'recoil'
import { todosState } from './atoms'

export const unCompletedTodos = selector({
  key: 'unCompletedTodos',
  get: ({ get }) => {
    const todos = get(todosState)
    return todos.filter((todo) => !todo.isCompleted)
  },
})
