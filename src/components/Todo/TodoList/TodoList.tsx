import { AnimatePresence } from 'framer-motion'

import { useAppSelector } from '@src/store/store'
import { TodoItem } from '@src/components'

const TodoList = () => {
  const todoList = useAppSelector((state) => state.todoList)

  return (
    <ul className="flex flex-col space-y-3 ">
      <AnimatePresence>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default TodoList
