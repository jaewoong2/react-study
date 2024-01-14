import React from 'react'
import useTodos from '@/recoil/todos/useTodos'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { StyledButton } from '@/components/Button/button.styled'

const ToodList = () => {
  const { todos, onClickTodoAddButton: onClickButton } = useTodos()
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id ?? 0

  const onClickBackButton = () => {
    navigate('/')
  }

  return (
    <div>
      <button type="button" onClick={onClickBackButton}>
        뒤로가기
      </button>
      <Link to="/">투두리스트보러가기</Link>
      모든친구들
      {todos.map((todo) => (
        <div key={todo.key}>{todo.content}</div>
      ))}
      <br />
      인덱스!!!!
      <StyledButton type="button" onClick={onClickButton} color="purple">
        버튼
      </StyledButton>
      {id ? <div>{todos[+id]?.content}</div> : ''}
    </div>
  )
}

export default ToodList
