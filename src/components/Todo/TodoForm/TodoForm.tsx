import { useState } from 'react'

import { addTodo, clearCompletedTodoList } from '@src/store/reducers/todoSlice'
import { useAppDispatch } from '@src/store/store'
import { Input, Button } from '@src/components'
import { isTextEmpty, removeWhiteSpace } from '@src/lib'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const dispatch = useAppDispatch()

  const onAddTodo = (event: any) => {
    event.preventDefault()
    if (isTextEmpty(title)) return
    dispatch(addTodo(removeWhiteSpace(title)))
    setTitle('')
  }

  const onClearCompleted = () => {
    dispatch(clearCompletedTodoList())
  }

  return (
    <form className="flex items-end justify-between gap-6" onSubmit={onAddTodo}>
      <div className="grid w-full grid-cols-4 items-end space-x-4">
        <Input
          value={title}
          placeholder="Add Todo"
          className="col-span-3"
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <Button label="Add" className="px-5" type="submit" />
      </div>
      <Button label="clear completed" onClick={onClearCompleted} className="min-w-max px-4" />
    </form>
  )
}

export default TodoForm
