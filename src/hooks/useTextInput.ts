import { useState } from 'react'

const useTextInput = (initialValue: string) => {
  const [text, setText] = useState(initialValue)

  const onChangeText: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setText(e.target.value)
  }

  return [text, setText, onChangeText] as const
}

export default useTextInput
