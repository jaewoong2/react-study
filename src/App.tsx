import React from 'react'
import styled from '@emotion/styled'
import useTodos from './recoil/todos/useTodos'

const StyledButton = styled('button')<{ color: string }>`
  color: ${(props) => props.theme.colors.primary};
`

const App = () => {
  const { unCompletedTodos, onClickTodoAddButton: onClickButton } = useTodos()

  return (
    <div>
      <StyledButton type="button" onClick={onClickButton} color="purple">
        버튼
      </StyledButton>
      {unCompletedTodos.map((todo) => (
        <div key={todo.key}>{todo.content}</div>
      ))}
    </div>
  )
}

export default App

// 2가지 방법이 있어욧!!!
// 1) css in js  를 충분히 이용하자
