import { useState } from 'react'

import { useAppDispatch } from '@src/store/store'
import { addTodo } from '@src/store/reducers/todoSlice'
import { Input, Button } from '@src/components'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const dispatch = useAppDispatch()

  const onSave = () => {
    if (title) {
      dispatch(addTodo(title))
      setTitle('')
    } else {
      alert('You must enter a title for your todo')
    }
  }

  return (
    <div className="flex items-center gap-6">
      <Input
        value={title}
        placeholder="Add Todo"
        onChange={(e) => setTitle(e.currentTarget.value)}
        className="min-w-[300px] "
      />
      <Button label="Add" onClick={onSave} className="px-5" />
    </div>
  )
}

export default TodoForm
