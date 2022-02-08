import { useState } from 'react'

import { useAppDispatch } from '@src/store/store'
import { addTodo, clearCompletedTodos } from '@src/store/reducers/todoSlice'
import { Input, Button } from '@src/components'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const dispatch = useAppDispatch()

  const onAddTodo = (event: any) => {
    event.preventDefault()
    if (title) {
      dispatch(addTodo(title))
      setTitle('')
    } else {
      alert('You must enter a title for your todo')
    }
  }

  const onClearCompleted = () => {
    dispatch(clearCompletedTodos())
  }

  return (
    <form className="flex items-center gap-6" onSubmit={onAddTodo}>
      <Input
        value={title}
        placeholder="Add Todo"
        onChange={(e) => setTitle(e.currentTarget.value)}
        className="min-w-[320px]"
      />
      <Button label="Add" className="px-5" type="submit" />
      <Button label="clear completed" onClick={onClearCompleted} className="px-5" />
    </form>
  )
}

export default TodoForm
