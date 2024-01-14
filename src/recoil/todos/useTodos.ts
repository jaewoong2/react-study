import { useRecoilState, useRecoilValue } from 'recoil'
import { todosState } from './atoms'
import { unCompletedTodos } from './selectors'

const useTodos = () => {
  const [todos, setTodos] = useRecoilState(todosState)
  const uct = useRecoilValue(unCompletedTodos)

  const onClickTodoAddButton = () => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          key: Math.random() * 2424,
          content: `예제 입니다`,
          isCompleted: true,
        },
      ]
    })
  }

  return {
    todos,
    setTodos,
    onClickTodoAddButton,
    unCompletedTodos: uct,
  }
}

export default useTodos
