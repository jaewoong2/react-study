import { atom } from 'recoil'

export type Todo = {
  key: number
  content: string
  isCompleted: boolean
}

export const todosState = atom<Todo[]>({
  key: 'todosState',
  default: [
    {
      key: 0,
      content: '예제 입니다',
      isCompleted: false,
    },
  ],
})
