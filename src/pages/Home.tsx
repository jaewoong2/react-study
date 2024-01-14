import React, { useState } from 'react'
import styled from '@emotion/styled'
import useTodos from '@/recoil/todos/useTodos'
import { Link } from 'react-router-dom'
import useGetPost from '@/hooks/useGetPost'
import { useDebounce } from '@/hooks/useDebounce'

const StyledButton = styled('button')<{ color: string }>`
  color: ${(props) => props.theme.colors.primary};
`

const Home = () => {
  const [id, setId] = useState(1)
  const { unCompletedTodos, onClickTodoAddButton: onClickButton } = useTodos()
  const debouncedId = useDebounce(id)
  const { post, isLoading } = useGetPost(debouncedId)

  return (
    <div>
      <Link to="/todoList?id=1">투두리스트보러가기</Link>
      <StyledButton type="button" onClick={onClickButton} color="purple">
        버튼
      </StyledButton>
      <input type="number" onChange={(e) => setId(+e.target.value)} value={id} />
      <br />
      안한친구들
      {unCompletedTodos.map((todo) => (
        <div key={todo.key}>{todo.content}</div>
      ))}
      {isLoading ? '로딩중' : '로딩아님'}
      {post?.title}
      {post?.content}
    </div>
  )
}

export default Home

// 2가지 방법이 있어욧!!!
// 1) css in js  를 충분히 이용하자
